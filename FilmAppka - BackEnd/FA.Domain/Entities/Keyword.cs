using FA.Domain.Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Domain.Entities
{
    public class Keyword : EnumEntity
    {
        public ICollection<Movie> Movies { get; set; }
    }
}
