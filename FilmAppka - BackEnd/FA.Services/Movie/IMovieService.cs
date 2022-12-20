using FA.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Services.Movie
{
    public interface IMovieService
    {
        public List<MovieInfo> getAllMovies();
        public List<MovieInfo> getMoviesBasedOnType(List<int> typeIds);
        public List<MovieInfo> getWatchedMoviesForUser(int userId);
        public void addMovieAsWatched(int userId, int movieId);
        public void removeMovieFromWatched(int userId, int movieId);
    }
}
