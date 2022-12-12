using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace FA.DataAccess.EntityConfiguration
{
    public class MovieTypeEnumConfiguration : EntityTypeConfiguration<MovieTypesEnum>
    {
        public MovieTypeEnumConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).HasColumnName("Movie type").IsRequired();
            HasMany(x => x.Movies).WithMany(x => x.MovieTypes);
            HasMany(x => x.LikedByUser).WithMany(x => x.LikedMovieTypes);
            HasMany(x => x.HatedByUser).WithMany(x => x.HatedMovieTypes);
        }
    }
}
