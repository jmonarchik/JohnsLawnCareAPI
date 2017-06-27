using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class DbInitializer
    {
        public static void Initialize(WebApiDbContext context)
        {
            context.Database.Migrate();
            context.Database.EnsureCreated();

        }
    }
}
