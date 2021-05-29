using System;

namespace api.Dtos
{
    public class StaffDto
    {
        public string Name { get; set; }
        public string Gender { get; set; }
        public string ImageUrl { get; set; }
        public DateTime EmployedAt { get; set; }
        public string Position { get; set; }
    }
}