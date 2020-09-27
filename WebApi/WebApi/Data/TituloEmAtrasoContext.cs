using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class TituloEmAtrasoContext : DbContext
    {
        public DbSet<TituloEmAtraso> TituloEmAtraso { get; set; }

        public DbSet<Parcela> Parcela { get; set; }

        public TituloEmAtrasoContext(DbContextOptions<TituloEmAtrasoContext> options)
            : base (options)
        {
                
        }
    }
}
