using System.Threading.Tasks;
using api.Data.Services.Interfaces;
using api.Dtos;
using api.Helpers;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class TeamMembersController:ApiBaseController
    {
        private readonly ITeamRepository _repos;
        private readonly IMapper _mapper;
        public TeamMembersController(ITeamRepository repos, IMapper mapper)
        {
            _repos = repos;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Team>>> GetTeamsAsync()
        {
            var teams = await _repos.GetTeamsAsync();
            return Ok(teams);
        }

        [HttpGet("{id}", Name = "GetTeamByIdAsync")]
        public async Task<ActionResult<Team>> GetTeamByIdAsync(int id)
        {
            var team = await _repos.GetTeamByIdAsync(id);
            return Ok(team);
        }

        [HttpPost]
        public async Task<ActionResult> AddTeam(TeamDto teamDto)
        {
            var team = _mapper.Map<Team>(teamDto);
            _repos.AddTeam(team);
            if (await _repos.SaveAsync())
            {
                return CreatedAtRoute("GetTeamByIdAsync", 
                    new {id = team.Id}, team);
            }
            return BadRequest("Failed to add Team");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTeam(TeamDto addTeamDto, int id)
        {
            var team = await _repos.GetTeamByIdAsync(id);
            _mapper.Map(addTeamDto, team);
            if (await _repos.SaveAsync())
            {
                return NoContent();
            }
            return BadRequest("Failed to update team");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTeam(int id)
        {
            var team = await _repos.GetTeamByIdAsync(id);
            _repos.RemoveTeam(team);
            if (await _repos.SaveAsync())
                return NoContent();
            return BadRequest("Failed to delete team");
        }
    }
}