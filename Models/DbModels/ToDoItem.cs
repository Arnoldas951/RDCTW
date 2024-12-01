using System.ComponentModel.DataAnnotations;

namespace Models.DbModels
{
    public class ToDoItem
    {
        public int Id { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        public int Duration { get; set; }

        public bool SetReminder { get; set; }

        public DateTime Date { get; set; }
    }
}
