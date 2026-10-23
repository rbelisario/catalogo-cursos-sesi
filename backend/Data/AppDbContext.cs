
using CatalogoCursos.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogoCursos.Api.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options)
    : DbContext(options)
{
    public DbSet<Curso> Cursos => Set<Curso>();
    public DbSet<Categoria> Categorias => Set<Categoria>();
    public DbSet<Modalidade> Modalidades => Set<Modalidade>();
    public DbSet<StatusCurso> StatusCursos => Set<StatusCurso>();
    public DbSet<Modulo> Modulos => Set<Modulo>();
    public DbSet<Aula> Aulas => Set<Aula>();
}
