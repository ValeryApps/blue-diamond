using System;
using System.Collections;
using System.Collections.Generic;

namespace api.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Level { get; set; }
        public string ImageUrl { get; set; }
        public bool IsMember { get; set; }
        public ICollection<StudentCourse> StudentCourses { get; set; }
        public DateTime EnrolledAt { get; set; }
    }
}