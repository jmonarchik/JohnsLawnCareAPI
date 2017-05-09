using Microsoft.AspNetCore.Mvc;
using Api.Services;
using DTO = Api.Services.Models;
using System.Collections.Generic;
using Api.Data;
using System.Linq;


namespace Api.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class AdminServicesController : Controller
    {
        private IAdminServices _adminServices;

        public AdminServicesController(IAdminServices adminServices)
        {
            _adminServices = adminServices;
        }

        [HttpGet]
        [Route("test")]
        public string GetTest()
        {
            return "Look Ma, my second pizza service!";
        }

        //Get Locations
        [HttpGet]
        [Route("locations")]
       public IEnumerable<DTO.Location> GetLocations()
       {
          return _adminServices.GetLocations();
       }

       //Get Location
       [HttpGet]
       [Route("location/{locationId}")]
       public DTO.Location GetLocation(int locationId)
       {
           var location = _adminServices.GetLocation(locationId);

           return location;
       }

       //Create Location
       [HttpPost]
       [Route("location/{newLocation}")]
       public DTO.Location CreateLocation(DTO.Location newLocation)
       {
           var location = _adminServices.CreateLocation(newLocation);
           var location2 = _adminServices.GetLocation(location.LocationId);

           return location2;
       }

       //Update Location
       [HttpPut]
       [Route("location/{updatedLocation}")]
       public DTO.Location UpdateLocation(DTO.Location updatedLocation)
       {
           var location = _adminServices.UpdateLocation(updatedLocation);
           var location2 = _adminServices.GetLocation(location.LocationId);

           return location2;
       }

       //Check Topping Invetory
       [HttpGet]
       [Route("topping/{toppingId}")]
       public DTO.Topping CheckToppingInventory(int toppingId)
       {
           var topping = _adminServices.CheckToppingInventory(toppingId);

           return topping;
       }

       //Update Topping Inventory
       [HttpPut]
       [Route("topping/{toppingId,toppingQuantity}")]
       public DTO.Topping UpdateTopping(int toppingId, int toppingQuantity)
       {
           var topping = _adminServices.UpdateTopping(toppingId,toppingQuantity);

           return topping;
       }
    }
}
