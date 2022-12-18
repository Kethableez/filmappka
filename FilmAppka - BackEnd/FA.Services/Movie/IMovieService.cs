using FA.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Services.Movie
{
    public interface IMovieService
    {
        public List<MovieInfo> getAllMovies();
        List<MovieInfo> getMoviesBasedOnTypeAndKeywords(List<int> typeIds, List<int> keywordIds);
        public List<MovieInfo> getWatchedMoviesForUser(int userId);
        public List<KeywordInfo> getAllKeywords();
        public void addMovieAsWatched(int userId, int movieId);
        public void removeMovieFromWatched(int userId, int movieId);
    }
}
