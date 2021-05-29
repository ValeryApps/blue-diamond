using System;
using System.Collections.Generic;

namespace api.Models
{
    public class StaffMember
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string ImageUrl { get; set; }
        public DateTime EmployedAt { get; set; }
        public string Position { get; set; }
        public ICollection<Course> Courses { get; set; }
    }
}