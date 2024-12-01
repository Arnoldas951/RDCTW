using Models.DbModels;
using System.Reflection;
using System.Text;

namespace Models
{
    public class TableCreatorUpdator
    {
        private static readonly List<Type> Tables = new List<Type>();
       public TableCreatorUpdator()
        {
            Tables.Add(typeof(ToDoItem));
        }

        public string CreateTable()
        {
            foreach (var table in Tables) 
            {
                var test = table.GetProperties();
                foreach (var field in table.GetProperties())
                {
                    StringBuilder sb = new StringBuilder();
                    sb.Append($"[{field.Name}] {field.PropertyType.Name}");

                    if (!IsNullable(field))
                        sb.Append(" NOT NULL ");

                    string lele ="";
                }
                //table.field
            }
            return "";
        }

        private bool IsNullable(PropertyInfo info) 
        {
            return Nullable.GetUnderlyingType(info.PropertyType) == null;
        }
    }
}
