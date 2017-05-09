using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace Api.Data.Repositories
{
    public class Repository : IRepository
    {
        private WebApiDbContext _context;

        public Repository(WebApiDbContext context)
        {
            _context = context;
        }

        public Location CreateLocation(Location newLocation) 
        {
            var location = _context.Locations.Add(newLocation); 

            _context.SaveChanges();

            return newLocation;
        }
        public Location UpdateLocation(Location updatedLocation)
        {
            var location = _context.Locations.Update(updatedLocation);

            _context.SaveChanges();

            var location2 = GetLocation(location.Entity.LocationId.Value);

            return location2;
        }

        public Location GetLocation(int locationId) 
        {
            return _context.Locations.FirstOrDefault(l => l.LocationId == locationId); 
        }

        public List<Location> GetLocations() 
        {
            return _context.Locations.ToList(); 
        }

        public Order CreateOrder(Order newOrder) 
        {
            var order = _context.Orders.Add(newOrder); 

            _context.SaveChanges();

            var order2 = GetOrder(order.Entity.OrderId);

            return order2; 
        }

        public Order GetOrder(int orderId) 
        {
            return _context.Orders.FirstOrDefault(o => o.OrderId == orderId); 
        }

        public IEnumerable<Order> GetOrders() 
        {
            return _context.Orders.ToList(); 
        }

        public List<Topping> GetToppings() 
        {
            return _context.Toppings.ToList(); 
        }

        public Topping GetTopping(int toppingId)
        {
            return _context.Toppings.FirstOrDefault(t => t.ToppingId == toppingId);
        }

        public Topping CheckToppingInventory(int toppingId) 
        {
            var topping = _context.Toppings.FirstOrDefault(t => t.ToppingId == toppingId); 
            return topping;
        }

        public Topping UpdateTopping(Topping updatedTopping) 
        {
            var topping = _context.Toppings.Update(updatedTopping);
            _context.SaveChanges();

            var topping2 = GetTopping(topping.Entity.ToppingId);

            return topping2;
        }
    }
}
