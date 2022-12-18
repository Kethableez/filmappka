using FA.Domain.Entities;
using NLog;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Reflection;
using System.Text;

namespace FA.DataAccess.Migrations
{
    public static class SeedHelper
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public static void Run(DbContext dbContext)
        {
        }
    }
}
