using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface ITestimonyRepository
    {
        void AddTestimony(Testimony testimony);
        void RemoveTestimony(Testimony testimony);
        Task<PagedList<Testimony>> GetTestimoniesAsync();
        Task<Testimony> GetTestimonyByIdAsync(int id);
        Task<bool> SaveAsync();
    }
}