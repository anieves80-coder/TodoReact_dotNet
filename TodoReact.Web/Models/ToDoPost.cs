namespace TodoReact.Web.Models
{
    public class ToDoPost
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public string StartDate { get; set; }
        public string? CompletedDate { get; set; } = "Not yet completed!";
        public bool Complete { get; set; }

    }
}
