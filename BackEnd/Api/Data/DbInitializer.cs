using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class DbInitializer
    {
        public static void Initialize(DbContext context)
        {
            context.Database.Migrate();
            context.Database.EnsureCreated();
        }
    }
}
