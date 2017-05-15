using System.Collections.Generic;
using DTO = Api.Services.Models;
using Api.Data.Repositories;
using Api.Data;

namespace Api.Services
{
    public class CustomerServices : ICustomerServices
    {
        private IRepository _repository;

        public CustomerServices(IRepository repository)
        {
            _repository = repository;
        }

        public List<DTO.Location> GetLocations() 
        {
            List<DTO.Location> locationDTOs = new List<DTO.Location>();

            var locationDAOs = _repository.GetLocations();

            foreach (var location in locationDAOs)
            {
                var dto = DTO.Location.fromDAO(location);
                locationDTOs.Add(dto);
            }

            return locationDTOs;
        }

        public DTO.Location GetLocation(int locationId) 
        {
            var location = _repository.GetLocation(locationId); 

            var dto = DTO.Location.fromDAO(location); 

            return dto;
        }

        public IEnumerable<DTO.Order> GetOrders()  
        {
            List<DTO.Order> orderDTOs = new List<DTO.Order>(); 

            var orderDAOs = _repository.GetOrders(); 
            foreach (var order in orderDAOs) 
            {
                var dto = DTO.Order.fromDAO(order);
                orderDTOs.Add(dto);
            }

            return orderDTOs;
        }

        public DTO.Order CreateOrder(DTO.Order newOrder) 
        {
            var dao = DTO.Order.toDAO(newOrder); 

            var order = _repository.CreateOrder(dao); 
            var dao2 = _repository.GetOrder(order.OrderId); 

            var dto = DTO.Order.fromDAO(dao2); 

            return dto;
        }

        public DTO.Order GetOrder(int orderId) 
        {
            var order = _repository.GetOrder(orderId); 
            var dto = DTO.Order.fromDAO(order); 

            return dto;
        }

        public List<DTO.Topping> GetToppings() 
        {
            List<DTO.Topping> toppingDTOs = new List<DTO.Topping>();

            var toppingDAOs = _repository.GetToppings();

            foreach (var topping in toppingDAOs)
            {
                var dto = DTO.Topping.fromDAO(topping);
                toppingDTOs.Add(dto);
            }

            return toppingDTOs;
        }
    }
}
