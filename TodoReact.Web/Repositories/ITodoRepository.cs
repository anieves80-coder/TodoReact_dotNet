using TodoReact.Web.Models;

namespace ToDoApp.Web.Repositories
{
    public interface ITodoRepository
    {

        public Task<IEnumerable<ToDoPost>> GetAll();
        
        public Task<ToDoPost> AddPostAsync(ToDoPost post);

        public Task<ToDoPost?> DeleteAsync(Guid id);

    }
}
