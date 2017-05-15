using Api.Services.Models;
using System.Collections.Generic;

namespace Api.Services
{
    public interface ICustomerServices
    {
        List<Location> GetLocations();
        Location GetLocation(int locationId);
        IEnumerable<Order> GetOrders();
        Order GetOrder(int orderId);
        Order CreateOrder(Order newOrder);
        List<Topping> GetToppings();
    }
}
