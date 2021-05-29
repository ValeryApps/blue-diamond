using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using api.Data.Services.Interfaces;
using api.Helpers;
using api.Models;

namespace api.Data.Services.Repositories
{
    public class StaffRepository:IStaffRepository
    {
        private readonly DataDbContext _context;
        public StaffRepository(DataDbContext context)
        {
            _context = context;
        }
        public void AddStaffMember(StaffMember staffMember)
        {
            _context.StaffMembers.Add(staffMember);
        }

        public void RemoveStaffMember(StaffMember staffMember)
        {
            _context.StaffMembers.Remove(staffMember);
        }

        public async Task<PagedList<StaffMember>> GetStaffMembersAsync(Params @params)
        {
            var staffs = _context.StaffMembers.AsQueryable();
            return await PagedList<StaffMember>.CreateAsync(staffs, @params.CurrentPage, @params.PageSize);
        }

        public async Task<StaffMember> GetStaffMemberByIdAsync(int id)
        {
            return await _context.StaffMembers
                .Include(x => x.Courses)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> SaveAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}