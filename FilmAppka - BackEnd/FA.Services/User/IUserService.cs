using FA.Services.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FA.Services.User
{
    public interface IUserService
    {
        UserInfo getUser(string username);
        void createUser(string username);
        void updateMoviesDatabase(string rootPath);
        void saveEmotion(int userId, string emotion);
    }
}
