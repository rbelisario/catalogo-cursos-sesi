
namespace CatalogoCursos.Api.Models;

public class Aula
{
    public int Id { get; set; }

    public required string Nome { get; set; }

    public required string Descricao { get; set; }

    public int Ordem { get; set; }

    public int ModuloId { get; set; }
    public Modulo Modulo { get; set; } = null!;
}
