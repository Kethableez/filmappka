using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace FA.DataAccess.EntityConfiguration
{
    public class UserConfiguration : EntityTypeConfiguration<User>
    {
        public UserConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.FirstName).IsRequired();
            Property(x => x.UserName).IsRequired();
            Property(x => x.Email).IsRequired();
            Property(x => x.LastName).IsRequired();
            Property(x => x.PasswordHash).IsRequired();
            HasMany(x => x.WatchedMovies).WithMany(x => x.WatchedByUser);
            HasMany(x => x.LikedMovieTypes).WithMany(x => x.LikedByUser);
            HasMany(x => x.HatedMovieTypes).WithMany(x => x.HatedByUser);
        }
    }
}
