using Api.Services.Models;
using System.Collections.Generic;

namespace Api.Services
{
    public interface IAdminServices
    {
        Location CreateLocation(Location newLocation);
        IEnumerable<Location> GetLocations();
        Location GetLocation(int locationId);
        Location UpdateLocation(Location updatedLocation);
        Topping CheckToppingInventory(int toppingId);
        Topping UpdateTopping(int toppingId, int toppingQuantity);
    }

}
