using System.Collections.Generic;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface ICourseRepository
    {
         Task AddCourse(Course course, int id);
         Task RemoveCourse(Course course, int id);
         Task<PagedList<Course>> GetCourseAsync(Params @params);
         Task<Course> GetCourseByIdAsync(int id);
         Task<bool> SaveAsync();
    }
}