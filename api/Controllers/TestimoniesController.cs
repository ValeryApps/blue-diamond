using System.Threading.Tasks;
using api.Data.Services.Interfaces;
using api.Dtos;
using api.Helpers;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
   
    public class TestimoniesController:ApiBaseController
    {
        private readonly ITestimonyRepository _repos;
        private readonly IMapper _mapper;
        public TestimoniesController(ITestimonyRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Testimony>>> GetTestimoniesAsync()
        {
            var testimonies = await _repos.GetTestimoniesAsync();
            
            return Ok(testimonies);
        }

        [HttpGet("{id}", Name = "GetTestimonyByIdAsync")]
        public async Task<ActionResult<Testimony>> GetTestimonyByIdAsync(int id)
        {
            var testimony = await _repos.GetTestimonyByIdAsync(id);
            return Ok(testimony);
        }

        [HttpPost]
        public async Task<ActionResult> AddTestimony(TestimonyDto testimonyDto)
        {
            var testimony = _mapper.Map<Testimony>(testimonyDto);
            _repos.AddTestimony(testimony);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetTestimonyByIdAsync", 
                    new {id = testimony.Id}, testimony);
            }

            return BadRequest("Failed to add Testimony");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTestimony(TestimonyDto addTestimonyDto, int id)
        {
            var testimony = await _repos.GetTestimonyByIdAsync(id);
            _mapper.Map(addTestimonyDto, testimony);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update testimony");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTestimony(int id)
        {
            var testimony = await _repos.GetTestimonyByIdAsync(id);
            _repos.RemoveTestimony(testimony);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete testimony");
        }
    }
}