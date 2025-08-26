using AppDounia.Domain.Entities;
using MediatR;

namespace AppDounia.Application.Products.Commands
{
    public record CreateProductCommand(
        string Name,
        int CategoryId,  
        decimal Price,
        string Description,
        string OriginVillage
    ) : IRequest<Product>;
}
