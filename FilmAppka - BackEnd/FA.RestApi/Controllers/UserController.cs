﻿using FA.Services.Models;
using FA.Services.User;
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
        private readonly IUserService userService;
        public UserController(IUserService _userService)
        {
            userService = _userService;
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

        [HttpGet("crateUser")]
        public void createUser(string username)
        {
            try
            {

            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }
    }
}
