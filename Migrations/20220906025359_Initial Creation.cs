using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PcEstoque.Migrations
{
    public partial class InitialCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Computers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Marca = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ModeloPlaca = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MemoriaRAM = table.Column<long>(type: "bigint", nullable: false),
                    DiscoRigido = table.Column<long>(type: "bigint", nullable: false),
                    Processador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VelocidadeProce = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Computers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Computers");
        }
    }
}
