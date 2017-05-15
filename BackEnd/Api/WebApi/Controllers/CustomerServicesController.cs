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

        //GetLocations
        [HttpGet]
        [Route("locations")]
        public List<DTO.Location> GetLocations()
        {
            return _customerServices.GetLocations();
        }
        
        //GetLocation
        [HttpGet]
        [Route("location/{locationId}")]
        public DTO.Location GetLocation(int locationId)
        {
            return _customerServices.GetLocation(locationId);
        }

        //GetOrders
        [HttpGet]
        [Route("orders")]
        public IEnumerable<DTO.Order> GetOrders()
        {
            return _customerServices.GetOrders();
        }

        //CreateOrder
        [HttpPost]
        [Route("order/{newOrder}")]
        public DTO.Order CreateOrder(DTO.Order newOrder)
        {
            var order = _customerServices.CreateOrder(newOrder);
            var order2 = _customerServices.GetOrder(order.OrderId);

            return order2;
        }

        //GetOrder
        [HttpGet]
        [Route("order/{orderId}")]
        public DTO.Order GetOrder(int orderId)
        {
            var order = _customerServices.GetOrder(orderId);

            return order;
        }

        //GetToppings
        [HttpGet]
        [Route("toppings")]
        public List<DTO.Topping> GetToppings()
        {
            return _customerServices.GetToppings();
        }
    }
}
