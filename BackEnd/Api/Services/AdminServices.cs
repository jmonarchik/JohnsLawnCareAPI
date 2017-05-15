using System.Collections.Generic;
using DTO = Api.Services.Models;
using Api.Data.Repositories;
using Api.Data;

namespace Api.Services
{
    public class AdminServices : IAdminServices
    {
        private IRepository _repository;

        public AdminServices(IRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<DTO.Location> GetLocations() 
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

        public DTO.Location CreateLocation(DTO.Location newLocation) 
        {
            var dao = DTO.Location.toDAO(newLocation); 

            var location = _repository.CreateLocation(dao); 
            var dao2 = _repository.GetLocation(location.LocationId.Value); 

            var dto = DTO.Location.fromDAO(dao2); 

            return dto;
        }

        public DTO.Location UpdateLocation(DTO.Location updatedLocation) 
        {
            var dao = DTO.Location.toDAO(updatedLocation); 

            var location = _repository.UpdateLocation(dao); 
            var dao2 = _repository.GetLocation(location.LocationId.Value); 

            var dto = DTO.Location.fromDAO(dao2); 

            return dto;
        }

        public DTO.Topping CheckToppingInventory(int toppingId) 
        {
            var topping = _repository.GetTopping(toppingId); 
            var dto = DTO.Topping.fromDAO(topping); 

            return dto;
        }

        public DTO.Topping UpdateTopping(int toppingId, int toppingQuantity) 
        {
            Topping topping = new Topping();
            topping.ToppingId = toppingId;

            topping = _repository.GetTopping(toppingId);

            topping.ToppingQuantity = toppingQuantity;
            var topping2 = _repository.UpdateTopping(topping); 
            var dto = DTO.Topping.fromDAO(topping2); 

            return dto;
        }
    }
}
