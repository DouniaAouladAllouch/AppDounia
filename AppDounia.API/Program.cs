using AppDounia.Application.Interfaces;
using AppDounia.Application.Products.Handlers;
using AppDounia.Application.Services;
using AppDounia.Infrastructure.Persistence;
using AppDounia.Infrastructure.Repositories;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ? Configuration pour éviter les erreurs HTTPS en production Docker
if (builder.Environment.IsProduction())
{
    builder.Services.Configure<Microsoft.AspNetCore.HttpsPolicy.HttpsRedirectionOptions>(options =>
    {
        options.HttpsPort = null;
    });
}

// Configuration de la base de données (existant)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Services existants
builder.Services.AddMediatR(typeof(CreateProductHandler).Assembly);
builder.Services.AddValidatorsFromAssemblyContaining<Program>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

// CORS existant
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Services API existants
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ? SIMPLE : Health Checks avec juste PostgreSQL
builder.Services.AddHealthChecks()
    .AddNpgSql(builder.Configuration.GetConnectionString("DefaultConnection") ?? "");

// ? Logging amélioré
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

var app = builder.Build();

// Configuration du pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ? Ne pas forcer HTTPS en production Docker
if (!app.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}

app.UseCors("AllowReactFrontend");
app.UseAuthorization();

// ? OBLIGATOIRE : Endpoints de health check
app.MapHealthChecks("/health");
app.MapHealthChecks("/api/health");

// ? Endpoint de test simple
app.MapGet("/", () => new
{
    Status = "AppDounia API is running!",
    Environment = app.Environment.EnvironmentName,
    Timestamp = DateTime.UtcNow,
    Version = "1.0.0"
});

// Mapping existant
app.MapControllers();

// ? Gestion d'erreurs et logging au démarrage
try
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogInformation("=== Démarrage de AppDounia.API ===");
    logger.LogInformation("Environment: {Environment}", app.Environment.EnvironmentName);
    logger.LogInformation("Connection String configured: {HasConnection}",
        !string.IsNullOrEmpty(builder.Configuration.GetConnectionString("DefaultConnection")));

    app.Run();
}
catch (Exception ex)
{
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "? Erreur critique lors du démarrage de AppDounia.API");
    throw;
}