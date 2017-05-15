using System;
using System.Collections.Generic;
using DAO = Api.Data;

namespace Api.Services.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string PhoneNumber { get; set; }
        public string OrderName { get; set; }
        public int OrderStatus { get; set; }
        public DateTime OrderTime { get; set; }
        public string OrderPrice { get; set; }
        public int LocationId { get; set; }
        public List<Pizza> Pizzas { get; set; }
        public int PizzaId { get; set; }

        //toDAO
        public static DAO.Order toDAO(Order dto)
        {
            var dao = new DAO.Order();
            dao.LocationId = dto.LocationId;
            dao.OrderId = dto.OrderId;
            dao.PhoneNumber = dto.PhoneNumber;
            dao.OrderStatus = dto.OrderStatus;
            dao.OrderTime = dto.OrderTime;
            dao.OrderPrice = dto.OrderPrice;
            dao.OrderName = dto.OrderName;
            dao.PizzaId = dto.PizzaId;
            return dao;
        }

        //fromDAO
        public static Order fromDAO(DAO.Order dao)
        {
            var dto = new Order();
            dto.LocationId = dao.LocationId;
            dto.OrderId = dao.OrderId;
            dto.PhoneNumber = dao.PhoneNumber;
            dto.OrderStatus = dao.OrderStatus;
            dto.OrderTime = dao.OrderTime;
            dto.OrderPrice = dao.OrderPrice;
            dto.OrderName = dao.OrderName;
            dto.PizzaId = dao.PizzaId;
            return dto;
        }
    }
}
