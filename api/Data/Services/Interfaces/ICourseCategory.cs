using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface ICourseCategory
    {
        void AddCourseCategory(CourseCategory courseCategory);
        void RemoveCourseCategory(CourseCategory courseCategory);
        Task<PagedList<CourseCategory>> GetCourseCategoriesAsync();
        Task<CourseCategory> GetCourseCategoryByIdAsync(int id);
        Task<bool> SaveAsync();
    }
}