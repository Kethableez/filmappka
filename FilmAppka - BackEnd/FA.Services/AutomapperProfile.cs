using AutoMapper;
using AutoMapper.QueryableExtensions;
using FA.Domain.Entities;
using FA.Services.Models;
using System;
using System.Linq;
using System.Text;

namespace FA.Services
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Domain.Entities.User, UserInfo>();

            CreateMap<MovieTypesEnum, TypeInfo>()
                .ForMember(d => d.Name, s => s.MapFrom(x => x.Value));

            CreateMap<TypeInfo, MovieTypesEnum>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.Name));

            CreateMap<TypeJsonModel, MovieTypesEnum>()
                .ForMember(d => d.Value, s => s.MapFrom(x => x.name));

            CreateMap<TypeJsonModel, TypeInfo>()
                .ForMember(d => d.Name, s => s.MapFrom(x => x.name));

            CreateMap<Domain.Entities.Movie, MovieInfo>()
                .ForMember(d => d.Title, s => s.MapFrom(x => x.Name))
                .ForMember(d => d.Type, s => s.MapFrom(x => x.MovieTypes));

            CreateMap<MovieInfo, Domain.Entities.Movie>()
                .ForMember(d => d.Name, s => s.MapFrom(x => x.Title))
                .ForMember(d => d.MovieTypes, s => s.MapFrom(x => x.Type));
        }
    }
}
