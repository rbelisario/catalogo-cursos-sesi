namespace CatalogoCursos.Api.DTOs.Cursos;

public record CursoDetalheDto(
    int Id,
    string NomeCompleto,
    string NomeBreve,
    string Descricao,
    string Categoria,
    string Modalidade,
    string Status,
    int CargaHorariaHoras,
    string? ImagemUrl,
    IReadOnlyList<ModuloDto> Modulos
);