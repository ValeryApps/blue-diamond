using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.Data.Services.Interfaces;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Repositories
{
    public class StudentRepository:IStudentRepository
    {
        private readonly DataDbContext _context;
        public StudentRepository(DataDbContext context)
        {
            _context = context;
        }
        public void AddStudent(Student student)
        {
           _context.Students.Add(student);
        }

        public void RemoveStudent(Student student)
        {
            _context.Students.Remove(student);
        }

        public async Task<PagedList<Student>> GetStudentsAsync(Params @params)
        {
            var students =_context.Students.AsQueryable();
            return await PagedList<Student>.CreateAsync(students, @params.CurrentPage, @params.PageSize);
        }

        public async Task<Student> GetStudentByIdAsync(int id)
        {
            return await _context.Students
                .Include(x=>x.StudentCourses)
                .FirstOrDefaultAsync(x=>x.Id==id);
        }

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}