using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using api.Data.Services.Interfaces;
using api.Dtos;
using api.Helpers;
using api.Models;

namespace api.Controllers
{
    public class CoursesController:ApiBaseController
    {
        private readonly ICourseRepository _repos;
        private readonly IStaffRepository _staffRepos;
        private readonly IMapper _mapper;
        public CoursesController(ICourseRepository repos, IStaffRepository staffRepos, IMapper mapper)
        {
            _repos = repos;
            _staffRepos = staffRepos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<Course>>> GetCoursesAsync([FromQuery] Params @params)
        {
            var courses = await _repos.GetCourseAsync(@params);
            Response.AddPagination(courses.CurrentPage, 
                courses.PageSize, courses.TotalItems, courses.TotalPages);
            return Ok(courses);
        }

        [HttpGet("{id}", Name = "GetCourseByIdAsync")]
        public async Task<ActionResult<Course>> GetCourseByIdAsync(int id)
        {
            var course = await _repos.GetCourseByIdAsync(id);
            return Ok(course);
        }

        [HttpPost("{staffId}")]
        public async Task<ActionResult> AddCourse(CourseDto courseDto, int staffId)
        {
            var staff = await _staffRepos.GetStaffMemberByIdAsync(staffId);
            var course = _mapper.Map<Course>(courseDto);
            course.AuthorId = staffId;
            course.CreatedAt = DateTime.Now;
            staff.Courses.Add(course);
          // await _repos.AddCourse(course, staffId);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetCourseByIdAsync", 
                    new {id = course.Id}, course);
            }

            return BadRequest("Failed to add Course");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateCourse(CourseDto addCourseDto, int id)
        {
            var course = await _repos.GetCourseByIdAsync(id);
            _mapper.Map(addCourseDto, course);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update course");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCourse(int id)
        {
            var course = await _repos.GetCourseByIdAsync(id);
           await _repos.RemoveCourse(course, id);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete course");
        }
    }
}