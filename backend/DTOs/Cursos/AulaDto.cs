namespace CatalogoCursos.Api.DTOs.Cursos;

public record AulaDto(
    int Id,
    string Nome,
    string Descricao,
    int Ordem
);