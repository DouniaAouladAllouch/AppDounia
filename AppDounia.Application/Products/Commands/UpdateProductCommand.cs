using AppDounia.Domain.Entities;
using MediatR;

namespace AppDounia.Application.Products.Commands
{
    public class UpdateProductCommand : IRequest<Product>
    {
        public int Id { get; set; }   
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public string OriginVillage { get; set; }
    }
}
