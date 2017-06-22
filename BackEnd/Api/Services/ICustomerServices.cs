using Api.Services.Models;
using System.Collections.Generic;

namespace Api.Services
{
    public interface ICustomerServices
    {
        List<Estimate> GetEstimate();
        Estimate GetEstimate(int estimateId);
        Estimate CreateEstimate(Estimate newEstimate);
    }
}
