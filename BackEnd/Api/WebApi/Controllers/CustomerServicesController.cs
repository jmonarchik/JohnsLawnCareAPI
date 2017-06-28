﻿using Microsoft.AspNetCore.Mvc;
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
            return "Johns Lawn Care API!";
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



        //CreateEstimate
        [HttpPost]
        [Route("estimate")]
        public DTO.Estimate CreateEstimate([FromBody] DTO.Estimate newEstimate)
        {
            var estimate = _customerServices.CreateEstimate(newEstimate);
            var estimate2 = _customerServices.GetEstimate(estimate.ID);

            return estimate2;
        }

    }
}
