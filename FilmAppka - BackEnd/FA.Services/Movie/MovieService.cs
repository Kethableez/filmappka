using AutoMapper;
using FA.DataAccess;
using FA.Domain.Entities;
using FA.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq.Dynamic.Core;
using System.Text;
using System.Linq;
using System.Data.Entity.Migrations;

namespace FA.Services.Movie
{
    public class MovieService : IMovieService
    {
        private readonly FADbContext faDbContext;
        private readonly IMapper mapper;
        public MovieService(FADbContext _faDbContext, IMapper _mapper)
        {
            faDbContext = _faDbContext;
            mapper = _mapper;
        }

        public void addMovieAsWatched(int userId, int movieId)
        {
            var movie = faDbContext.Set<Domain.Entities.Movie>().Where(x => x.Id == movieId).FirstOrDefault();
            var user = faDbContext.Set<Domain.Entities.User>().Where(x => x.Id == userId).FirstOrDefault();
            user.WatchedMovies.Add(movie);
            faDbContext.Set<Domain.Entities.User>().AddOrUpdate(user);
            faDbContext.SaveChanges();
        }

        public List<MovieInfo> getAllMovies()
        {
            var movies = faDbContext.Set<Domain.Entities.Movie>().AsNoTracking();
            var moviesVm = new List<MovieInfo>();
            mapper.Map(movies, moviesVm);
            return moviesVm;
        }

        public List<MovieInfo> getWatchedMoviesForUser(int userId)
        {
            var user = faDbContext.Set<Domain.Entities.User>().Where(x => x.Id == userId).FirstOrDefault();
            return user.WatchedMovies.Cast<MovieInfo>().ToList();
        }

        public void removeMovieFromWatched(int userId, int movieId)
        {
            var movie = faDbContext.Set<Domain.Entities.Movie>().Where(x => x.Id == movieId).FirstOrDefault();
            var user = faDbContext.Set<Domain.Entities.User>().Where(x => x.Id == userId).FirstOrDefault();
            user.WatchedMovies.Remove(movie);
            faDbContext.Set<Domain.Entities.User>().AddOrUpdate(user);
            faDbContext.SaveChanges();
        }
    }
}
