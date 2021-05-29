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
    public class StudentsController:ApiBaseController
    {
        private readonly IStudentRepository _repos;
        private readonly IMapper _mapper;
        public StudentsController(IStudentRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Student>>> GetStudentsAsync([FromQuery]Params @params)
        {
            var students = await _repos.GetStudentsAsync(@params);
            Response.AddPagination(students.CurrentPage, students.PageSize, 
                students.TotalItems, students.TotalPages);
            return Ok(students);
        }

        [HttpGet("{id}", Name = "GetStudentByIdAsync")]
        public async Task<ActionResult<Student>> GetStudentByIdAsync(int id)
        {
            var student = await _repos.GetStudentByIdAsync(id);
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult> AddStudent(StudentDto studentDto)
        {
            var student = _mapper.Map<Student>(studentDto);
            _repos.AddStudent(student);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetStudentByIdAsync", 
                    new {id = student.Id}, student);
            }

            return BadRequest("Failed to add student");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateStudent(StudentDto addStudentDto, int id)
        {
            var student = await _repos.GetStudentByIdAsync(id);
             _mapper.Map(addStudentDto, student);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update student");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStudent(int id)
        {
            var student = await _repos.GetStudentByIdAsync(id);
            _repos.RemoveStudent(student);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete student");
        }
    }
}