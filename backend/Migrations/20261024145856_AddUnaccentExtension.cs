using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CatalogoCursos.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddUnaccentExtension : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
                "CREATE EXTENSION IF NOT EXISTS unaccent;");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Não removemos a extensão no rollback.
            // Ela pode já existir ou estar sendo utilizada no banco.
        }
    }
}
