using System;
using System.Collections.Generic;
using System.Text;

namespace Api.Data
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
        public int PizzaId { get; set; }
    }
}
