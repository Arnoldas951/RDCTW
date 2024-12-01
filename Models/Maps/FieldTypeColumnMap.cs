namespace Models.Enums
{
    public class FieldTypeColumnMap
    {
        public static Dictionary<string, string> typeMap = new Dictionary<string, string> { 
            { "int", "INT" },
            { "string", "NVARCHAR"},
            { "boolean", "BIT"},
            { "decimal", "DECIMAL"},
            { "float", "FLOAT"} };
    }
}
