using System.Collections.Generic;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface IStudentRepository
    {
         void AddStudent(Student student);
         void RemoveStudent(Student student);
         Task<PagedList<Student>> GetStudentsAsync(Params @params);
         Task<Student> GetStudentByIdAsync(int id);
         Task<bool> SaveAsync();
    }
}