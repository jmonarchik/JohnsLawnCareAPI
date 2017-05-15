using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = Api.Services.Models;

namespace Api.WebApi.Models
{
    public class Topping
    {
        public int ToppingId { get; set; }
        public string ToppingName { get; set; }
        public int ToppingQuantity { get; set; }
        public bool Checked { get; set; }
    }
}
