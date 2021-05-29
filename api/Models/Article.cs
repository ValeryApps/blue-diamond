using System;

namespace api.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Intro { get; set; }
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public string AuthorName { get; set; }
    }
}