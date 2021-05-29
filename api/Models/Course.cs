using System;
using System.Collections.Generic;

namespace api.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string AuthorName { get; set; }
        public string VideoUrl { get; set; }
        public string ImageUrl { get; set; }
        public string Level { get; set; }
        public StaffMember Author { get; set; }
        public int AuthorId { get; set; }
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}