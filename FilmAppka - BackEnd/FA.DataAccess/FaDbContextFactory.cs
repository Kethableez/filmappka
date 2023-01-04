using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Text;

namespace FA.DataAccess
{
    public class FADbContextFactory : IDbContextFactory<FADbContext>
    {
        public FADbContextFactory()
        {
        }

        public FADbContext Create()
        {
            
           //return new FADbContext(@"Server=fa-db;Database=FilmAppkaDB;User=sa;Password=S3cur3P@ssW0rd!;");
           return new FADbContext(@"Server=filmappka.database.windows.net;Database=filmappka;User=filmappka;Password=$Vyoc#32aR39Ojy738;");
        }
    }
}
