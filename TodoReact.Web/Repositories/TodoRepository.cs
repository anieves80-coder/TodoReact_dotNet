using Microsoft.EntityFrameworkCore;
using TodoReact.Web.Data;
using TodoReact.Web.Models;

namespace ToDoApp.Web.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly ToDoDbContext toDoDbContext;
        public TodoRepository(ToDoDbContext toDoDbContext) {
            this.toDoDbContext = toDoDbContext;
        }

        public async Task<ToDoPost> AddPostAsync(ToDoPost post)
        {            
            await toDoDbContext.ToDoPosts.AddAsync(post);
            await toDoDbContext.SaveChangesAsync();
            return post;
        }

        public async Task<ToDoPost?> DeleteAsync(Guid id)
        {
            var post = await toDoDbContext.ToDoPosts.FindAsync(id);
            if (post != null)
            {
                toDoDbContext.ToDoPosts.Remove(post);
                await toDoDbContext.SaveChangesAsync();
            }
            return post;
        }

        public async Task<IEnumerable<ToDoPost>> GetAll()
        {
            return await toDoDbContext.ToDoPosts.ToListAsync();            
        }

    }
}
