using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = Api.Services.Models;

namespace Api.WebApi.Models
{
    public class PizzaTopping
    {
        public int PizzaId { get; set; }
        public Pizza Pizza { get; set; }

        public int ToppingId { get; set; }
        public Topping Topping { get; set; }
    }
}
