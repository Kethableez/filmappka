using FA.Services.Models;
using Microsoft.AspNet.OData.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FA.RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public UserController()
        {
        }

        [HttpGet("getUser")]
        public UserInfo getUser(int userId)  //albo UserName 
        {

            return new UserInfo();
            //try
            //{
            //    return userService.getShelter(shelterId);
            //}
            //catch (Exception ex)
            //{
            //    logger.Error(ex);
            //    throw new Exception("", ex);
            //}
        }
    }
}
