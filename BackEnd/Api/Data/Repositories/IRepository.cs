using System;
using System.Collections.Generic;
using System.Text;

namespace Api.Data.Repositories
{
    public interface IRepository
    {
        List<Location> GetLocations();
        Location GetLocation(int locationId);
        Location CreateLocation(Location newLocation);
        Location UpdateLocation(Location updatedLocation);


        Order CreateOrder(Order newOrder);
        IEnumerable<Order> GetOrders();
        Order GetOrder(int orderId);


        List<Topping> GetToppings();
        Topping GetTopping(int toppingId);
        Topping UpdateTopping(Topping updatedTopping);
    }
}
