
using Microsoft.EntityFrameworkCore;
using CatalogoCursos.Api.Data;
using CatalogoCursos.Api.DTOs.Cursos;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddProblemDetails(options =>
{
    options.CustomizeProblemDetails = context =>
    {
        var exception = context.HttpContext.Features
            .Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>()
            ?.Error;

        if (exception is Microsoft.AspNetCore.Http.BadHttpRequestException)
        {
            context.ProblemDetails.Status = StatusCodes.Status400BadRequest;
            context.ProblemDetails.Title = "Parâmetro inválido";
            context.ProblemDetails.Detail =
                "Um ou mais parâmetros da requisição têm formato inválido.";
        }
    };
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendDevelopment", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
builder.Services.AddOpenApi();

var connectionString = builder.Configuration
    .GetConnectionString("DefaultConnection");

if (string.IsNullOrWhiteSpace(connectionString))
{
    throw new InvalidOperationException(
        "A connection string 'DefaultConnection' não foi configurada.");
}

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

var app = builder.Build();

app.UseCors("FrontendDevelopment");

app.UseExceptionHandler(new ExceptionHandlerOptions
{
    StatusCodeSelector = exception =>
        exception is Microsoft.AspNetCore.Http.BadHttpRequestException
            ? StatusCodes.Status400BadRequest
            : StatusCodes.Status500InternalServerError
});

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider
        .GetRequiredService<AppDbContext>();

    await DbInitializer.InitializeAsync(dbContext);
}


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.MapGet("/api/cursos", async (
    string? nome,
    int? categoriaId,
    int? modalidadeId,
    int? statusId,
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    if (nome is not null && nome.Trim().Length > 100)
    {
        return Results.BadRequest(new
        {
            mensagem = "O parâmetro 'nome' deve ter no máximo 100 caracteres."
        });
    }

    if (categoriaId is <= 0)
    {
        return Results.BadRequest(new
        {
            mensagem = "O parâmetro 'categoriaId' deve ser um inteiro positivo."
        });
    }

    if (modalidadeId is <= 0)
    {
        return Results.BadRequest(new
        {
            mensagem = "O parâmetro 'modalidadeId' deve ser um inteiro positivo."
        });
    }

    if (statusId is <= 0)
    {
        return Results.BadRequest(new
        {
            mensagem = "O parâmetro 'statusId' deve ser um inteiro positivo."
        });
    }

    var query = dbContext.Cursos
        .AsNoTracking()
        .AsQueryable();

    if (!string.IsNullOrWhiteSpace(nome))
    {
        var termo = nome.Trim();
        var termoNormalizado = $"%{termo}%";

        query = query.Where(curso =>
            EF.Functions.ILike(
                AppDbContext.Unaccent(curso.NomeCompleto),
                AppDbContext.Unaccent(termoNormalizado)) ||
            EF.Functions.ILike(
                AppDbContext.Unaccent(curso.NomeBreve),
                AppDbContext.Unaccent(termoNormalizado)));
    }

    if (categoriaId.HasValue)
    {
        query = query.Where(curso =>
            curso.CategoriaId == categoriaId.Value);
    }

    if (modalidadeId.HasValue)
    {
        query = query.Where(curso =>
            curso.ModalidadeId == modalidadeId.Value);
    }

    if (statusId.HasValue)
    {
        query = query.Where(curso =>
            curso.StatusCursoId == statusId.Value);
    }

    var cursos = await query
        .OrderBy(curso => curso.NomeCompleto)
        .Select(curso => new CursoListaDto(
            curso.Id,
            curso.NomeCompleto,
            curso.NomeBreve,
            curso.Descricao,
            curso.Categoria.Nome,
            curso.Modalidade.Nome,
            curso.StatusCurso.Nome,
            curso.CargaHorariaHoras,
            curso.ImagemUrl
        ))
        .ToListAsync(cancellationToken);

    return Results.Ok(cursos);
})
.WithName("GetCursos");


app.MapGet("/api/cursos/{id:int}", async (
    int id,
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    var curso = await dbContext.Cursos
        .AsNoTracking()
        .Where(curso => curso.Id == id)
        .Select(curso => new CursoDetalheDto(
            curso.Id,
            curso.NomeCompleto,
            curso.NomeBreve,
            curso.Descricao,
            curso.Categoria.Nome,
            curso.Modalidade.Nome,
            curso.StatusCurso.Nome,
            curso.CargaHorariaHoras,
            curso.ImagemUrl,
            curso.Modulos
                .OrderBy(modulo => modulo.Ordem)
                .Select(modulo => new ModuloDto(
                    modulo.Id,
                    modulo.Nome,
                    modulo.Descricao,
                    modulo.Ordem,
                    modulo.Aulas
                        .OrderBy(aula => aula.Ordem)
                        .Select(aula => new AulaDto(
                            aula.Id,
                            aula.Nome,
                            aula.Descricao,
                            aula.Ordem
                        ))
                        .ToList()
                ))
                .ToList()
        ))
        .FirstOrDefaultAsync(cancellationToken);

    return curso is null
        ? Results.NotFound(new { mensagem = "Curso não encontrado." })
        : Results.Ok(curso);
})
.WithName("GetCursoPorId");


app.MapGet("/api/categorias", async (
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    var categorias = await dbContext.Categorias
        .AsNoTracking()
        .Where(categoria => categoria.Ativo)
        .OrderBy(categoria => categoria.Nome)
        .Select(categoria => new OpcaoFiltroDto(
            categoria.Id,
            categoria.Nome,
            categoria.Descricao
        ))
        .ToListAsync(cancellationToken);

    return Results.Ok(categorias);
})
.WithName("GetCategorias");


app.MapGet("/api/modalidades", async (
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    var modalidades = await dbContext.Modalidades
        .AsNoTracking()
        .Where(modalidade => modalidade.Ativo)
        .OrderBy(modalidade => modalidade.Nome)
        .Select(modalidade => new OpcaoFiltroDto(
            modalidade.Id,
            modalidade.Nome,
            modalidade.Descricao
        ))
        .ToListAsync(cancellationToken);

    return Results.Ok(modalidades);
})
.WithName("GetModalidades");


app.MapGet("/api/status-cursos", async (
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    var statusCursos = await dbContext.StatusCursos
        .AsNoTracking()
        .Where(status => status.Ativo)
        .OrderBy(status => status.Nome)
        .Select(status => new OpcaoFiltroDto(
            status.Id,
            status.Nome,
            status.Descricao
        ))
        .ToListAsync(cancellationToken);

    return Results.Ok(statusCursos);
})
.WithName("GetStatusCursos");

app.MapGet("/weatherforecast", () =>
{
    var summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild",
        "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    return Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast(
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ));
})
.WithName("GetWeatherForecast");

app.MapGet("/health/database", async (
    AppDbContext dbContext,
    CancellationToken cancellationToken) =>
{
    try
    {
        var canConnect = await dbContext.Database
            .CanConnectAsync(cancellationToken);

        return canConnect
            ? Results.Ok(new { status = "connected" })
            : Results.Problem(
                title: "Database unavailable",
                statusCode: StatusCodes.Status503ServiceUnavailable);
    }
    catch (Exception)
    {
        return Results.Problem(
            title: "Database connection failed",
            statusCode: StatusCodes.Status503ServiceUnavailable);
    }
})
.WithName("CheckDatabaseConnection");

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
