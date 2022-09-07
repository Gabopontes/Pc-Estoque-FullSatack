using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PcEstoque.Data;
using PcEstoque.Models;

namespace PcEstoque.Controllers
{
    [ApiController]
    [Route("api/computers")]
    public class ComputerController : Controller
    {
        private readonly PcEstoqueContext _pcEstoqueContext;

        public ComputerController(PcEstoqueContext pcEstoqueContext)
        {
            _pcEstoqueContext = pcEstoqueContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllComputers()
        {
            var computers = await _pcEstoqueContext.Computers.ToListAsync();

            return Ok(computers);
        }

        [HttpPost]
        public async Task<IActionResult> AddComputer([FromBody] Computer computerRequest)
        {
            computerRequest.Id = Guid.NewGuid();

            await _pcEstoqueContext.Computers.AddAsync(computerRequest);
            await _pcEstoqueContext.SaveChangesAsync();

            return Ok(computerRequest);
        }

        [HttpPost]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetComputer([FromRoute] Guid id)
        {
            var computer = await _pcEstoqueContext.Computers.FirstOrDefaultAsync(x => x.Id == id);

            if (computer == null)
            {
                return NotFound();
            }
            return Ok(computer);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateComputer(
            [FromRoute] Guid id,
            Computer updateComputerRequest)
        {
            var computer = await _pcEstoqueContext.Computers.FindAsync(id);

            if (computer == null)
            {
                return NotFound();
            }

            computer.Marca = updateComputerRequest.Marca;
            computer.ModeloPlaca = updateComputerRequest.ModeloPlaca;
            computer.MemoriaRAM = updateComputerRequest.MemoriaRAM;
            computer.DiscoRigido = updateComputerRequest.DiscoRigido;
            computer.Processador = updateComputerRequest.Processador; ;
            computer.VelocidadeProce = updateComputerRequest.VelocidadeProce;

            await _pcEstoqueContext.SaveChangesAsync();

            return Ok(computer);

        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteComputer([FromRoute] Guid id)
        {
            var computer = await _pcEstoqueContext.Computers.FindAsync(id);
            if (computer == null)
            {
                return NotFound();
            }
            _pcEstoqueContext.Computers.Remove(computer);
            await _pcEstoqueContext.SaveChangesAsync();

            return Ok(computer);
        }

    }


}
