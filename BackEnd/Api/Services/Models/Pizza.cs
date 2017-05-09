using System;
using System.Collections.Generic;
using DAO = Api.Data;

namespace Api.Services.Models
{
    public class Pizza
    {
        public static int PizzaNumber = 0;
        public Pizza()
        {
            this.PizzaId = Pizza.PizzaNumber++;
            this.toppings = new List<DAO.Topping>();
        }

        public int PizzaId { get; set; }
        public ICollection<PizzaTopping> PizzaToppings { get; set; }
        public int OrderId { get; set; }
        public List<DAO.Topping> toppings { get; set; }

        //toDAO
        public static DAO.Pizza toDAO(Pizza dto)
        {
            var dao = new DAO.Pizza();
            dao.PizzaId = dto.PizzaId;
            dao.OrderId = dto.OrderId;
            return dao;
        }

        //fromDAO
        public static Pizza fromDAO(DAO.Pizza dao)
        {
            var dto = new Pizza();
            dto.PizzaId = dao.PizzaId;
            dto.OrderId = dao.OrderId;
            return dto;
        }
    }
}
