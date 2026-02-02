using Microsoft.EntityFrameworkCore;
using SignalRLab.Entities;

namespace SignalRLab.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {
        }

        public DbSet<Products> Products { get; set; }
    }
}