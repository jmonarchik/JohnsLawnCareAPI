using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class WebApiDbContext : DbContext
    {
        public DbSet<Estimate> Estimates { get; set; }
        // public DbSet<Location> Locations { get; set; }
        // public DbSet<Topping> Toppings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=C:\\Users\\John Monarchik\\Desktop\\Projects\\JMLawnServicesAPI\\src\\Database\\JMLawnServices.db");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<PizzaTopping>()
            //     .HasKey(pt => new { pt.PizzaId, pt.ToppingId });

            // modelBuilder.Entity<PizzaTopping>()
            //     .HasOne(pt => pt.Pizza)
            //     .WithMany(p => p.PizzaToppings)
            //     .HasForeignKey(pt => pt.PizzaId);

            // modelBuilder.Entity<PizzaTopping>()
            //     .HasOne(pt => pt.Topping)
            //     .WithMany(t => t.PizzaToppings)
            //     .HasForeignKey(pt => pt.ToppingId);
        }
    }
}
