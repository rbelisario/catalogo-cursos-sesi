
namespace CatalogoCursos.Api.Models;

public class Modulo
{
    public int Id { get; set; }

    public required string Nome { get; set; }

    public string? Descricao { get; set; }

    public int Ordem { get; set; }

    public int CursoId { get; set; }
    public Curso Curso { get; set; } = null!;

    public ICollection<Aula> Aulas { get; set; } = new List<Aula>();
}
