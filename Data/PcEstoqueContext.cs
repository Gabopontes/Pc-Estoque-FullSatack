using Microsoft.EntityFrameworkCore;
using PcEstoque.Models;

namespace PcEstoque.Data
{
    public class PcEstoqueContext : DbContext
    {
        public PcEstoqueContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Computer> Computers { get; set; }
    }
}
