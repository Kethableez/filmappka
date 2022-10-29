using FA.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Domain.Entities.Enums
{
    public class MovieTypesEnum : EnumEntity
    {
        public ICollection<Movie> Movies { get; set; }

        public ICollection<User> LikedByUser { get; set; }

        public ICollection<User> HatedByUser { get; set; }
    }
}
