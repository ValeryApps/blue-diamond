using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;

namespace api.Controllers
{
    [Authorize(Roles = "Moderator")]
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DataDbContext _context;
        private readonly UserManager<User> _userManager;

        public AdminController(DataDbContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        [Authorize(Roles = "AdminUser")]
        [HttpGet("Users")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await (from user in _context.Users
                               orderby user.UserName
                               select new
                               {
                                   id = user.Id,
                                   userName = user.UserName,
                                   roles = (from userRole in user.UserRoles
                                            join role in _context.Roles
                                            on userRole.RoleId equals role.Id
                                            select role.Name).ToList()
                               }).ToListAsync();
            return Ok(users);
        }

       
        [Authorize(Roles = "AdminUser")]
        [HttpPost("EditRoles/{userName}")]
        public async Task<IActionResult> EditRoles(string userName, [FromQuery]string roles)
        {
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null) return BadRequest("User not found");

            var userRoles = await _userManager.GetRolesAsync(user);

            var selectedRoles = roles.Split(",").ToArray();
            selectedRoles = selectedRoles ?? new string[] { };

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));

            if (!result.Succeeded)
                return BadRequest("Failed to add roles");

            var removeResult = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));

            if (!removeResult.Succeeded)
                return BadRequest("Failed to remove roles");
            var newUserRoles = await _userManager.GetRolesAsync(user);
            return Ok(newUserRoles);
        }
    }
}