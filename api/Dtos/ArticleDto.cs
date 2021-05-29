using System;

namespace api.Dtos
{
    public class ArticleDto
    {
        public string Title { get; set; }
        public string Category { get; set; }
        public string Intro { get; set; }
        public string Content { get; set; }
        public string ImageUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public string AuthorName { get; set; }
    }
}