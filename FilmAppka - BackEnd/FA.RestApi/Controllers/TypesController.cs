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
    public class TypesController : ControllerBase
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();
        public TypesController()
        {
        }

        [HttpPatch("addLikedMovieType")]
        public void addLikedMovieType(int userId,int typeId)
        {

        }
        [HttpPatch("addDislikedMovieType")]
        public void addDislikedMovieType(int userId, int typeId)
        {

        }
        [HttpDelete("removeLikedMovieType")]
        public void removeLikedMovieType(int userId, int typeId)
        {

        }
        [HttpDelete("removeDislikedMovieType")]
        public void removeDislikedMovieType(int userId, int typeId)
        {

        }
        [HttpGet("getAllMovieTypes")]
        public List<TypeInfo> getAllMovieTypes()
        {
            return new List<TypeInfo>();
        }
        [HttpGet("getLikedMovieTypes")]
        public List<TypeInfo> getLikedMovieTypes(int userId)
        {
            return new List<TypeInfo>();
        }
        [HttpGet("getDislikedMovieTypes")]
        public List<TypeInfo> getDislikedMovieTypes(int userId)
        {
            return new List<TypeInfo>();
        }

    }
}
