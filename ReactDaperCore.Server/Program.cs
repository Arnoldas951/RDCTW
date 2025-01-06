using Models;

var builder = WebApplication.CreateBuilder(args);
string connectionString = string.Empty;

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.json");
connectionString = builder.Configuration.GetConnectionString("local");
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//TableCreatorUpdator tableCreatorUpdator = new TableCreatorUpdator(connectionString);
//tableCreatorUpdator.CreateTables();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
