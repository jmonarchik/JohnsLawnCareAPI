using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DTO = Api.Services.Models;

namespace Api.WebApi.Models
{
    public class Pizza
    {
        public int PizzaId { get; set; }
        public ICollection<PizzaTopping> PizzaToppings { get; set; }
        public int OrderId { get; set; }
        public List<DTO.Topping> toppings { get; set; }
    }
}
