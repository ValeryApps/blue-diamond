using System;

namespace api.Dtos
{
    public class CourseDto
    {
        public string Title { get; set; }
        public string Category { get; set; }
        public string AuthorName { get; set; }
        public string VideoUrl { get; set; }
        public string ImageUrl { get; set; }
        public string Level { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}