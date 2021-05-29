using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.Data.Services.Interfaces;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Repositories
{
    public class CourseRepository:ICourseRepository
    {
        private readonly DataDbContext _context;
        public CourseRepository(DataDbContext context)
        {
            _context = context;
        }
        public async Task AddCourse(Course course,int id)
        {
            //var author = await _context.StaffMembers.FindAsync(id);
            var courses = await _context.Courses.Where(x => x.AuthorId == id)
                .ToListAsync();
            courses.Add(course);
            
        }

        public async Task RemoveCourse(Course course, int id)
        {
            var author = await _context.StaffMembers.FindAsync(id);
            author.Courses.Remove(course);
        }

        public async Task<PagedList<Course>> GetCourseAsync(Params @params)
        {
            var courses = _context.Courses.AsQueryable();
            return await PagedList<Course>.CreateAsync(courses, @params.CurrentPage, @params.PageSize);
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _context.Courses.FindAsync(id);
        }

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}