﻿using System;
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
            
           return new FADbContext(@"Server=localhost\SQLEXPRESS;Database=FilmappkaDB;Integrated Security=true;");
        }
    }
}
