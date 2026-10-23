
namespace CatalogoCursos.Api.Models;

public class Curso
{
    public int Id { get; set; }

    public required string NomeCompleto { get; set; }

    public required string NomeBreve { get; set; }

    public required string Descricao { get; set; }

    public int CategoriaId { get; set; }
    public Categoria Categoria { get; set; } = null!;

    public int ModalidadeId { get; set; }
    public Modalidade Modalidade { get; set; } = null!;

    public int StatusCursoId { get; set; }
    public StatusCurso StatusCurso { get; set; } = null!;

    public int CargaHorariaHoras { get; set; }

    public required string PublicoAlvo { get; set; }

    public required string ImagemUrl { get; set; }

    public DateOnly? DataDisponibilizacao { get; set; }

    public ICollection<Modulo> Modulos { get; set; } = new List<Modulo>();
}
