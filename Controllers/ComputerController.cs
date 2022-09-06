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
    }


}
