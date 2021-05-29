using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class User:IdentityUser<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}