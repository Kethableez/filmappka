using FA.Domain.Entities.Abstract;
using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Domain.Entities
{
    public class User : Entity<int>
    {
        public string Username { get; set; }

        public string LastKnownEmotion { get; set; }

        public ICollection<MovieTypesEnum> LikedMovieTypes { get; set; }

        public ICollection<MovieTypesEnum> HatedMovieTypes { get; set; }

        public ICollection<Movie> WatchedMovies { get; set; }
    }
}
