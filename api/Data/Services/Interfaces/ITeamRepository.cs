using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface ITeamRepository
    {
        void AddTeam(Team team);
        void RemoveTeam(Team team);
        Task<PagedList<Team>> GetTeamsAsync();
        Task<Team> GetTeamByIdAsync(int id);
        Task<bool> SaveAsync();
    } 
}