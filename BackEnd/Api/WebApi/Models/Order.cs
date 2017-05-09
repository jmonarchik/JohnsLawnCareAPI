using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Services.Models;

namespace Api.WebApi.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string PhoneNumber { get; set; }
        public string OrderName { get; set; }
        public int OrderStatus { get; set; }
        public DateTime OrderTime { get; set; }
        public string OrderPrice { get; set; }
        public int LocationId { get; set; }
        public List<Pizza> Pizzas { get; set; }
        public int PizzaId { get; set; }
    }
}
