using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Services.Models;

namespace Api.WebApi.Models
{
    public class Estimate
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int ZipCode { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public int RequestsMow { get; set; }
        public int RequestsBlow { get; set; }
        public int RequestsEdge { get; set; }
        public decimal Cost { get; set; }
        public int AreaInSquareFeet { get; set; }
    }
}