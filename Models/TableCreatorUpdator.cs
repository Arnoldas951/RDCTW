using Microsoft.Data.SqlClient;
using Models.DbModels;
using System.Reflection;
using System.Text;

namespace Models
{
    public class TableCreatorUpdator
    {
        private static readonly List<Type> Tables = new List<Type>();
        private readonly string DbConnectionString;

        private static Dictionary<string, string> TypeMap = new Dictionary<string, string> {
            { "Int32", "INT" },
            { "String", "NVARCHAR"},
            { "Boolean", "BIT"},
            { "decimal", "DECIMAL"},
            { "DateTime", "DATETIME"},
            { "Float", "FLOAT"} };

        public TableCreatorUpdator(string DbConnectionString)
        {
            this.DbConnectionString = DbConnectionString;
            Tables.Add(typeof(ToDoItem));
        }

        public void CreateTables()
        {
            string commandText = CreateTableScript();
            using (SqlConnection con = new SqlConnection(DbConnectionString))
            {
                SqlCommand cmd = new SqlCommand(commandText, con);
                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }

        public string CreateTableScript()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var table in Tables)
            {
                var test = table.GetProperties();
                sb.Append($"CREATE TABLE [{table.Name}](");
                foreach (var field in table.GetProperties())
                {
                    sb.Append($"[{field.Name}] {TypeMap.GetValueOrDefault(field.PropertyType.Name)},");

                    if (!IsNullable(field))
                        sb.Append(" NOT NULL ");

                }
                sb.Append(")");
            }
            return sb.ToString();
        }

        private bool IsNullable(PropertyInfo info)
        {
            return Nullable.GetUnderlyingType(info.PropertyType) == null;
        }
    }
}
