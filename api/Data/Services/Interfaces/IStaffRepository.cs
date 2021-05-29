using System.Collections.Generic;
using System.Threading.Tasks;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Interfaces
{
    public interface IStaffRepository
    {
         void AddStaffMember(StaffMember staffMember);
         void RemoveStaffMember(StaffMember staffMember);
         Task<PagedList<StaffMember>> GetStaffMembersAsync(Params @params);
         Task<StaffMember> GetStaffMemberByIdAsync(int id);
         Task<bool> SaveAsync();
    }
}