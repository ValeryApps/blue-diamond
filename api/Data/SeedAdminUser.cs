using System.Collections.Generic;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Internal;


namespace api.Data
{
    public class SeedAdminUser
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly DataDbContext _context;

        public SeedAdminUser(UserManager<User> userManager, RoleManager<Role> roleManager, DataDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }

        public void SeedData()
        {
            if (!_userManager.Users.Any())
            {
                var roles = new List<Role>
        {
          new Role {Name = "AdminUser"},
          new Role {Name = "Moderator"},
          new Role {Name = "Member"}
        };
                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }
                var adminUser = new User
                {
                    UserName = "Guhena",
                    Email = "valeryghn10@gmail.com"
                };

                IdentityResult result = _userManager.CreateAsync(adminUser, "$ValeryGhn2020$").Result;
                if (result.Succeeded)
                {
                    var admin = _userManager.FindByNameAsync("Guhena").Result;
                    _userManager.AddToRolesAsync(admin, new[] { "AdminUser", "Moderator" }).Wait();
                }

            }
        }


    }
}