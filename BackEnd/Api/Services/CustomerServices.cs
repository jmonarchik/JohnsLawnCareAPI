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

        public List<DTO.Estimate> GetEstimate()
        {
            List<DTO.Estimate> estimateDTOs = new List<DTO.Estimate>();

            var estimateDAOs = _repository.GetEstimate();

            foreach (var estimate in estimateDAOs)
            {
                var dto = DTO.Estimate.fromDAO(estimate);
                estimateDTOs.Add(dto);
            }

            return estimateDTOs;
        }

        public DTO.Estimate GetEstimate(int estimateId)
        {
            var estimate = _repository.GetEstimate(estimateId);

            var dto = DTO.Estimate.fromDAO(estimate);

            return dto;
        }


        public DTO.Estimate CreateEstimate(DTO.Estimate newEstimate)
        {
            var dao = DTO.Estimate.toDAO(newEstimate);

            var estimate = _repository.CreateEstimate(dao);
            var dao2 = _repository.GetEstimate(estimate.ID);

            var dto = DTO.Estimate.fromDAO(dao2);

            return dto;
        }
    }
}
