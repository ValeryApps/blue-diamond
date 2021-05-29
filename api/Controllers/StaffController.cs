using System;
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
    public class StaffController:ApiBaseController
    {
        private readonly IStaffRepository _repos;
        private readonly IMapper _mapper;
        public StaffController(IStaffRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<StaffMember>>> GetStaffsAsync([FromQuery] Params @params)
        {
            var staff = await _repos.GetStaffMembersAsync(@params);
            Response.AddPagination(staff.CurrentPage, 
                staff.PageSize, staff.TotalItems,staff.TotalPages);
            return Ok(staff);
        }

        [HttpGet("{id}", Name = "GetStaffByIdAsync")]
        public async Task<ActionResult<StaffMember>> GetStaffByIdAsync(int id)
        {
            var staff = await _repos.GetStaffMemberByIdAsync(id);
            return Ok(staff);
        }

        [HttpPost]
        public async Task<ActionResult> AddStaff(StaffDto staffDto)
        {
            var staff = _mapper.Map<StaffMember>(staffDto);
            staff.EmployedAt = DateTime.Now;
            _repos.AddStaffMember(staff);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetStaffByIdAsync", 
                    new {id = staff.Id}, staff);
            }

            return BadRequest("Failed to add staff");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateStaff(StaffDto addStaffDto, int id)
        {
            var staff = await _repos.GetStaffMemberByIdAsync(id);
            _mapper.Map(addStaffDto, staff);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update staff");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStaff(int id)
        {
            var staff = await _repos.GetStaffMemberByIdAsync(id);
            _repos.RemoveStaffMember(staff);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete staff");
        }
    }
}