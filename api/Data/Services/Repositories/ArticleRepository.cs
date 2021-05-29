using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data.Services.Interfaces;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Repositories
{
    public class ArticleRepository:IArticleRepository
    {
        private readonly DataDbContext _context;
        public ArticleRepository(DataDbContext context)
        {
            _context = context;
        }
        public void AddArticle(Article article)
        {
            _context.Articles.Add(article);
        }

        public void RemoveArticle(Article article)
        {
            _context.Articles.Add(article);
        }

        public async Task<PagedList<Article>> GetArticlesAsync(Params @params)
        {
            var articles =  _context.Articles.AsQueryable();
            return await PagedList<Article>.CreateAsync(articles, @params.CurrentPage, @params.PageSize);
        }

        public async Task<Article> GetArticleByIdAsync(int id)
        {
            return await _context.Articles.FindAsync(id);
        }

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}