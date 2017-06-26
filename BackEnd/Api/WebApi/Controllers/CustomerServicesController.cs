using Microsoft.AspNetCore.Mvc;
using Api.Services;
using DTO = Api.Services.Models;
using System.Collections.Generic;
using Api.Data;
using System.Linq;

namespace Api.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CustomerServicesController : Controller
    {
        private ICustomerServices _customerServices;

        public CustomerServicesController(ICustomerServices customerServices)
        {
            _customerServices = customerServices;
        }

        [HttpGet]
        [Route("test")]
        public string GetTest()
        {
            return "Look Ma, my first pizza service!";
        }

        //GetEstimates
        [HttpGet]
        [Route("estimates")]
        public List<DTO.Estimate> GetEstimates()
        {
            return _customerServices.GetEstimate();
        }

        //GetEstimate
        [HttpGet]
        [Route("estimate/{estimateId}")]
        public DTO.Estimate GetEstimate(int estimateId)
        {
            return _customerServices.GetEstimate(estimateId);
        }


        // See original code from pizza if error here.
        //CreateEstimate
        [HttpPost]
        [Route("estimate/{newEstimate}")]
        public DTO.Estimate CreateEstimate(DTO.Estimate newEstimate)
        {
            var estimate = _customerServices.CreateEstimate(newEstimate);
            var estimate2 = _customerServices.CreateEstimate(estimate);

            return estimate2;
        }

    }
}
