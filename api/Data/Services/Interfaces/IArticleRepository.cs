using System.Collections.Generic;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface IArticleRepository
    {
         void AddArticle(Article article);
         void RemoveArticle(Article article);
         Task<PagedList<Article>> GetArticlesAsync(Params @params);
         Task<Article> GetArticleByIdAsync(int id);
         Task<bool> SaveAsync();
    }
}