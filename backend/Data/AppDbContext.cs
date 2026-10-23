
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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Cursos
        modelBuilder.Entity<Curso>(entity =>
        {
            entity.Property(c => c.NomeCompleto).HasMaxLength(200);
            entity.Property(c => c.NomeBreve).HasMaxLength(100);
            entity.Property(c => c.ImagemUrl).HasMaxLength(2048);
        });

        // Tabelas de referência
        modelBuilder.Entity<Categoria>()
            .Property(c => c.Nome)
            .HasMaxLength(80);

        modelBuilder.Entity<Modalidade>()
            .Property(m => m.Nome)
            .HasMaxLength(80);

        modelBuilder.Entity<StatusCurso>()
            .Property(s => s.Nome)
            .HasMaxLength(80);

        // Conteúdo dos cursos
        modelBuilder.Entity<Modulo>()
            .Property(m => m.Nome)
            .HasMaxLength(160);

        modelBuilder.Entity<Aula>()
            .Property(a => a.Nome)
            .HasMaxLength(160);
    }
}
