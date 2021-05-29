using System;

namespace api.Dtos
{
    public class StudentDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Level { get; set; }
        public string ImageUrl { get; set; }
        public bool IsMember { get; set; }
        public DateTime EnrolledAt { get; set; }
    }
}