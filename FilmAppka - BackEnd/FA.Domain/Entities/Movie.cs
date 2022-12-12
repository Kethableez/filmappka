using FA.Domain.Entities.Abstract;
using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Domain.Entities
{
    public class Movie : Entity<int>
    {
        public string Name { get; set; }

        public int YearOfProduction { get; set; }

        public decimal Rating { get; set; }

        public string Description { get; set; }

        public ICollection<MovieTypesEnum> MovieTypes { get; set; } = new List<MovieTypesEnum>();

        public ICollection<User> WatchedByUser { get; set; }
    }
}
