using AutoMapper;
using FA.DataAccess;
using FA.Domain.Entities;
using FA.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FA.Services.User
{
    public class UserService : IUserService
    {
        private readonly FADbContext faDbContext;
        private readonly Mapper mapper;
        public UserService(FADbContext _faDbContext, Mapper _mapper)
        {
            faDbContext = _faDbContext;
            mapper = _mapper;
        }
        public UserInfo getUser(string username)
        {
            var dbUser = faDbContext.Set<Domain.Entities.User>().Where(x => x.UserName == username).FirstOrDefault();
            var user = new UserInfo();
            mapper.Map(dbUser, user); ;
            return user;
        }
    }
}
