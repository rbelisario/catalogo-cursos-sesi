
namespace CatalogoCursos.Api.Models;

public class StatusCurso
{
    public int Id { get; set; }

    public required string Nome { get; set; }

    public string? Descricao { get; set; }

    public bool Ativo { get; set; } = true;

    public ICollection<Curso> Cursos { get; set; } = new List<Curso>();
}
