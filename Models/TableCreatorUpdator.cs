using Models.DbModels;
using Models.Enums;
using System.Reflection;
using System.Text;

namespace Models
{
    public class TableCreatorUpdator
    {
        private static readonly List<Type> Tables = new List<Type>();

        private static Dictionary<string, string> TypeMap = new Dictionary<string, string> {
            { "Int32", "INT" },
            { "String", "NVARCHAR"},
            { "Boolean", "BIT"},
            { "decimal", "DECIMAL"},
            { "DateTime", "DATETIME"},
            { "Float", "FLOAT"} };

        public TableCreatorUpdator()
        {
            Tables.Add(typeof(ToDoItem));
        }

        public string CreateTable()
        {
            foreach (var table in Tables)
            {
                var test = table.GetProperties();
                StringBuilder sb = new StringBuilder();
                sb.Append($"CREATE TABLE [{table.Name}](");
                foreach (var field in table.GetProperties())
                {
                    sb.Append($"[{field.Name}] {TypeMap.GetValueOrDefault(field.PropertyType.Name)},");

                    if (!IsNullable(field))
                        sb.Append(" NOT NULL ");

                }
                sb.Append(")");
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
