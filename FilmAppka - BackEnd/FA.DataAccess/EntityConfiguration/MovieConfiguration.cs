﻿using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace FA.DataAccess.EntityConfiguration
{
    public class MovieConfiguration : EntityTypeConfiguration<Movie>
    {
        public MovieConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Name).IsRequired();
            Property(x => x.Rating).IsRequired();
            Property(x => x.NumberOfVoters).IsRequired();
            Property(x => x.YearOfProduction).IsRequired();
            Property(x => x.ImageLink).IsOptional();
            HasMany(x => x.MovieTypes).WithMany(x=>x.Movies);
        }
    }
}
