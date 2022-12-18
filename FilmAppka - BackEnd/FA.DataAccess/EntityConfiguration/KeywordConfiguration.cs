using FA.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Text;

namespace FA.DataAccess.EntityConfiguration
{
    public class KeywordConfiguration : EntityTypeConfiguration<Keyword>
    {
        public KeywordConfiguration()
        {
            HasKey(x => x.Id);
            Property(x => x.Value).IsRequired().HasColumnName("Keyword");
            HasMany(x => x.Movies).WithMany(x => x.Keywords);
        }
    }
}
