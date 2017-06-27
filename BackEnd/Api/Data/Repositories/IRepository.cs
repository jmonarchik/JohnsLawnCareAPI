using System;
using System.Collections.Generic;
using System.Text;

namespace Api.Data.Repositories
{
    public interface IRepository
    {
        List<Estimate> GetEstimate();
        Estimate GetEstimate(int estimateId);
        Estimate CreateEstimate(Estimate newEstimate);

    }
}
