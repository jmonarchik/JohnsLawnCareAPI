using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = Api.Services.Models;

namespace Api.WebApi.Models
{
    public class Location
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string LocationAddress { get; set; }
        public string LocationPhoneNumber { get; set; }
    }
}
