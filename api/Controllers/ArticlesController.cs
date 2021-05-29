
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using api.Data.Services.Interfaces;
using api.Dtos;
using api.Helpers;
using api.Models;

namespace api.Controllers
{
    public class ArticlesController:ApiBaseController
    {
        private readonly IArticleRepository _repos;
        private readonly IMapper _mapper;
        public ArticlesController(IArticleRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Article>>> GetArticlesAsync([FromQuery] Params @params)
        {
            var articles = await _repos.GetArticlesAsync(@params);
            Response.AddPagination(articles.CurrentPage, 
                articles.PageSize, articles.TotalItems, articles.TotalPages);
            return Ok(articles);
        }

        [HttpGet("{id}", Name = "GetArticleByIdAsync")]
        public async Task<ActionResult<Article>> GetArticleByIdAsync(int id)
        {
            var article = await _repos.GetArticleByIdAsync(id);
            return Ok(article);
        }

        [HttpPost]
        public async Task<ActionResult> AddArticle(ArticleDto articleDto)
        {
            var article = _mapper.Map<Article>(articleDto);
            _repos.AddArticle(article);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetArticleByIdAsync", 
                    new {id = article.Id}, article);
            }

            return BadRequest("Failed to add Article");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateArticle(ArticleDto addArticleDto, int id)
        {
            var article = await _repos.GetArticleByIdAsync(id);
            _mapper.Map(addArticleDto, article);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update article");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteArticle(int id)
        {
            var article = await _repos.GetArticleByIdAsync(id);
            _repos.RemoveArticle(article);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete article");
        }
    }
}