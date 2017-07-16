using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace domain.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // public DbSet<Book> Books { get; set; }

        // public DbSet<Project> Projects { get; set; }

        public DbSet<Author> Authors { get; set; }
    }
}