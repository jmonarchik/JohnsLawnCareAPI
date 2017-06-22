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

        public Estimate CreateEstimate(Estimate newEstimate)
        {
            var estimate = _context.Estimates.Add(newEstimate);

            _context.SaveChanges();

            return newEstimate;
        }
        public Estimate GetEstimate(int estimateId)
        {
            return _context.Estimates.FirstOrDefault(l => l.ID == estimateId);
        }

        public List<Estimate> GetEstimate()
        {
            return _context.Estimates.ToList();
        }

        // public Order CreateOrder(Order newOrder) 
        // {
        //     var order = _context.Orders.Add(newOrder); 

        //     _context.SaveChanges();

        //     var order2 = GetOrder(order.Entity.OrderId);

        //     return order2; 
        // }

        // public Order GetOrder(int orderId) 
        // {
        //     return _context.Orders.FirstOrDefault(o => o.OrderId == orderId); 
        // }

        // public IEnumerable<Order> GetOrders() 
        // {
        //     return _context.Orders.ToList(); 
        // }

        // public List<Topping> GetToppings() 
        // {
        //     return _context.Toppings.ToList(); 
        // }

        // public Topping GetTopping(int toppingId)
        // {
        //     return _context.Toppings.FirstOrDefault(t => t.ToppingId == toppingId);
        // }

        // public Topping CheckToppingInventory(int toppingId) 
        // {
        //     var topping = _context.Toppings.FirstOrDefault(t => t.ToppingId == toppingId); 
        //     return topping;
        // }

        // public Topping UpdateTopping(Topping updatedTopping) 
        // {
        //     var topping = _context.Toppings.Update(updatedTopping);
        //     _context.SaveChanges();

        //     var topping2 = GetTopping(topping.Entity.ToppingId);

        //     return topping2;
        // }
    }
}
