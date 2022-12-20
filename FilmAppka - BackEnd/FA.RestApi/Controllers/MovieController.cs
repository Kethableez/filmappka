
using FA.Services.Models;
using FA.Services.Movie;
using Microsoft.AspNet.OData.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FA.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private readonly IMovieService movieService;
        public MovieController(IMovieService _movieService)
        {
            movieService = _movieService;
        }

        [HttpGet("getAllMovies")]
        public List<MovieInfo> getAllMovies()
        {
            try
            {
                return movieService.getAllMovies();
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpPost("getMoviesBasedOnTypeAndKeywords")]
        public List<MovieInfo> getMoviesBasedOnTypeAndKeywords(List<int> typeIds)
        {
            try
            {
                return movieService.getMoviesBasedOnType(typeIds);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpGet("getWatchedMoviesForUser")]
        public List<MovieInfo> getWatchedMoviesForUser(int userId)
        {
            try
            {
                return movieService.getWatchedMoviesForUser(userId);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
        [HttpPatch("addMovieAsWatched")]
        public void addMovieAsWatched(int userId, int movieId)
        {
            try
            {
                movieService.addMovieAsWatched(userId, movieId);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
        [HttpDelete("removeMovieFromWatched")]
        public void removeMovieFromWatched(int userId, int movieId)
        {
            try
            {
                movieService.removeMovieFromWatched(userId, movieId);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
    }
}
