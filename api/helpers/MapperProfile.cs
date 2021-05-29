using AutoMapper;
using api.Dtos;
using api.Models;

namespace api.helpers
{
    public class MapperProfile:Profile
    {
        public MapperProfile()
        {
            CreateMap<UserRegisterDto, User>();
            CreateMap<User, UserToReturnDto>();
            CreateMap<UserLoginDto, User>();
            CreateMap<Student, StudentDto>().ReverseMap();
            CreateMap<Course, CourseDto>().ReverseMap();
            CreateMap<StaffMember, StaffDto>().ReverseMap();
            CreateMap<Article, ArticleDto>().ReverseMap();
        }
    }
}