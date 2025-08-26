using AppDounia.Application.Products.Commands;
using AppDounia.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AppDounia.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProductController(IMediator mediator)
        {
            _mediator = mediator;
        }

        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProductCommand command)
        {
            var product = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id, [FromServices] AppDounia.Infrastructure.Persistence.AppDbContext context)
        {
            var product = await context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return Ok(product);
        }

        
        [HttpGet]
        public async Task<IActionResult> GetAll([FromServices] AppDounia.Infrastructure.Persistence.AppDbContext context)
        {
            var products = await context.Products.ToListAsync();
            return Ok(products);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateProductCommand command)
        {
            command.Id = id; // On ignore l'ID du JSON et on prend celui de l'URL
            var updatedProduct = await _mediator.Send(command);
            return Ok(updatedProduct);
        }


        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var command = new DeleteProductCommand { Id = id };
            await _mediator.Send(command);
            return NoContent(); // 204 si suppression réussie
        }
    }
}
