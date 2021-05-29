namespace api.Helpers
{
    public class Params
    {
        public int PageSize { get; set; } = int.MaxValue;
        public int CurrentPage { get; set; } = 1;
        public string Country { get; set; }
        public string Category { get; set; }
        public string Language { get; set; }
    }
}