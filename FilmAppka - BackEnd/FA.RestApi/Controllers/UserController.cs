using FA.DataAccess.Migrations;
using FA.Services.Models;
using FA.Services.User;
using Microsoft.AspNet.OData.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;
using NLog;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace FA.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        private readonly IUserService userService;
        private readonly IHostingEnvironment hostingEnvironment;
        public UserController(IUserService _userService, IHostingEnvironment _hostingEnvironment)
        {
            userService = _userService;
            hostingEnvironment = _hostingEnvironment;
        }

        [HttpGet("getUser")]
        public UserInfo getUser(string username)
        {
            try
            {
                return userService.getUser(username);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpPost("createUser")]
        public void createUser(string username)
        {
            try
            {
                userService.createUser(username);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpPut("updateMoviesDatabase")]
        public void updateMoviesDatabase()
        {
            try
            {
                var rootPath = hostingEnvironment.ContentRootPath;
                userService.updateMoviesDatabase(rootPath);
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

        [HttpPatch("updateLastKnownEmotionForUser")]
        public void updateLastKnowEmotionForUser(int userId, string emotion)
        {

        }
    }
}
