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
            return _context.Estimates.First(k => k.ID == estimateId);
        }

        public List<Estimate> GetEstimate()
        {
            return _context.Estimates.ToList();
        }

    }
}
