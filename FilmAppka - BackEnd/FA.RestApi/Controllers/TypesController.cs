using FA.Services.Models;
using FA.Services.Type;
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
        private readonly ITypeService typeService;
        public TypesController(ITypeService _typeService)
        {
            typeService = _typeService;
        }


        [HttpGet("getAllMovieTypes")]
        public List<TypeInfo> getAllMovieTypes()
        {
            try
            {
                return typeService.getAllMovieTypes();
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                throw new Exception("", ex);
            }
        }

    }
}
