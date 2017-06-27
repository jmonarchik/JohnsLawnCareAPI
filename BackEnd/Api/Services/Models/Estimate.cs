using System;
using System.Collections.Generic;
using System.Text;
using DAO = Api.Data;

namespace Api.Services.Models
{
    public class Estimate
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public int ZipCode { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
        public int RequestsMow { get; set; }
        public int RequestsBlow { get; set; }
        public int RequestsEdge { get; set; }
        public decimal Cost { get; set; }
        public int AreaInSquareFeet { get; set; }

        //toDAO
        public static DAO.Estimate toDAO(Estimate dto)
        {
            var dao = new DAO.Estimate();
            dao.FirstName = dto.FirstName;
            dao.LastName = dto.LastName;
            dao.StreetAddress = dto.StreetAddress;
            dao.City = dto.City;
            dao.ZipCode = dto.ZipCode;
            dao.PhoneNumber = dto.PhoneNumber;
            dao.Email = dto.Email;
            dao.RequestsMow = dto.RequestsMow;
            dao.RequestsBlow = dto.RequestsBlow;
            dao.RequestsEdge = dto.RequestsEdge;
            dao.Cost = dto.Cost;

            return dao;
        }

        // fromDAO
        public static Estimate fromDAO(DAO.Estimate dao)
        {
            var dto = new Estimate();
            dto.FirstName = dao.FirstName;
            dto.LastName = dao.LastName;
            dto.StreetAddress = dao.StreetAddress;
            dto.City = dao.City;
            dto.ZipCode = dao.ZipCode;
            dto.PhoneNumber = dao.PhoneNumber;
            dto.Email = dao.Email;
            dto.RequestsMow = dao.RequestsMow;
            dto.RequestsBlow = dao.RequestsBlow;
            dto.RequestsEdge = dao.RequestsEdge;
            dto.Cost = dao.Cost;

            return dto;

        }

    }
}