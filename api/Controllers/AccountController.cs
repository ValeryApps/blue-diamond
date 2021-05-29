using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using api.Dtos;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController:ControllerBase
    {
      //  private readonly IApiRepository _repos;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IConfiguration _config;

        public AccountController( IMapper mapper, UserManager<User> userManager,
            SignInManager<User> signInManager, RoleManager<Role> roleManager, IConfiguration config)
        {
 
            _mapper = mapper;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _config = config;
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            User user = await _userManager.Users.Include(x=>x.UserRoles)
                .FirstOrDefaultAsync(x => x.Id == id);
            if(user != null)
                return Ok(user);
            return NotFound();
        }
        [HttpPost("Register")]
        public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
        {
            User user = _mapper.Map<User>(userRegisterDto);
            IdentityResult result = await _userManager.CreateAsync(user, userRegisterDto.Password);
            var roleResult = await _userManager.AddToRoleAsync(user, "Member");
            if (result.Succeeded && roleResult.Succeeded)
            { 
                var userToReturn = _mapper.Map<UserToReturnDto>(user);
                return CreatedAtRoute("GetUser", new {id = user.Id}, userToReturn);
            }

            return BadRequest("Sorry, Registration failed");
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLoginDto userLoginDto)
        {
            // var dtoUser = await _userManager.Users
            //     .FirstOrDefaultAsync(x => x.Email == userLoginDto.Email);
            var dtoUser = await _userManager.FindByEmailAsync(userLoginDto.Email);
            if (dtoUser == null)
                return Unauthorized();
           
            var result =await _signInManager.CheckPasswordSignInAsync(dtoUser, userLoginDto.Password, false);
            if (result.Succeeded)
            {
                var user = _mapper.Map<User>(dtoUser);
                var userToReturn = _mapper.Map<UserToReturnDto>(user);
                var jwtToken = GenerateToken(user);

                return Ok(new
                {
                 token = jwtToken,
                 user = userToReturn
                });
            }
           

            return BadRequest("Login failed");
        }

        private string GenerateToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            var roles = _userManager.GetRolesAsync(user).Result;
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = cred
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}