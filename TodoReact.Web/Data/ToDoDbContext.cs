using Microsoft.EntityFrameworkCore;
using TodoReact.Web.Models;

namespace TodoReact.Web.Data
{
    public class ToDoDbContext : DbContext
    {
        public ToDoDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ToDoPost> ToDoPosts { get; set; }        

    }
}
