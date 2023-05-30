using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoApp.Web.Repositories;
using TodoReact.Web.Data;
using TodoReact.Web.Models;

namespace TodoReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        ITodoRepository todoRepository;
        public ToDoController(ITodoRepository todoRepository)
        {
            this.todoRepository = todoRepository;
        }

        [HttpGet]
        [Route("GetTodoList")]
        public async Task<IActionResult> GetTodoList() 
        {
            List<ToDoPost> list = (await todoRepository.GetAll()).ToList();
            return Ok(list);
        }


    }
}
