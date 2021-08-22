using System.Threading.Tasks;
using api.Data.Services.Interfaces;
using api.Dtos;
using api.Helpers;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class CourseCategoriesController:ApiBaseController
    {
        private readonly ICourseCategory _repos;
        private readonly IMapper _mapper;
        public CourseCategoriesController(ICourseCategory repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<CourseCategory>>> GetCourseCategoriesAsync()
        {
            var courseCategories = await _repos.GetCourseCategoriesAsync();
            return Ok(courseCategories);
        }

        [HttpGet("{id}", Name = "GetCourseCategoryByIdAsync")]
        public async Task<ActionResult<CourseCategory>> GetCourseCategoryByIdAsync(int id)
        {
            var courseCategory = await _repos.GetCourseCategoryByIdAsync(id);
            return Ok(courseCategory);
        }

        [HttpPost]
        public async Task<ActionResult> AddCourseCategory(CourseCategoryDto courseCategoryDto)
        {
            var courseCategory = _mapper.Map<CourseCategory>(courseCategoryDto);
            _repos.AddCourseCategory(courseCategory);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetCourseCategoryByIdAsync", 
                    new {id = courseCategory.Id}, courseCategory);
            }
            return BadRequest("Failed to add CourseCategory");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCourseCategory(CourseCategoryDto addCourseCategoryDto, int id)
        {
            var courseCategory = await _repos.GetCourseCategoryByIdAsync(id);
            _mapper.Map(addCourseCategoryDto, courseCategory);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }
            return BadRequest("Failed to update courseCategory");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourseCategory(int id)
        {
            var courseCategory = await _repos.GetCourseCategoryByIdAsync(id);
            _repos.RemoveCourseCategory(courseCategory);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete courseCategory");
        }
    }
}