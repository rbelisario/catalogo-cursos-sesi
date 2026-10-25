namespace CatalogoCursos.Api.DTOs.Cursos;

public record ModuloDto(
    int Id,
    string Nome,
    string? Descricao,
    int Ordem,
    IReadOnlyList<AulaDto> Aulas
);