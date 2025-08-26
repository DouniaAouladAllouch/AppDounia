using AppDounia.Application.Interfaces;
using AppDounia.Application.Products.Commands;
using AppDounia.Domain.Entities;
using MediatR;

namespace AppDounia.Application.Products.Handlers
{
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, Product>
    {
        private readonly IProductRepository _repository;

        public UpdateProductCommandHandler(IProductRepository repository)
        {
            _repository = repository;
        }

        public async Task<Product> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            
            var product = await _repository.GetByIdAsync(request.Id);
            if (product == null)
            {
                throw new KeyNotFoundException($"Produit avec Id {request.Id} introuvable.");
            }

            
            product.Name = request.Name;
            product.Description = request.Description;
            product.Price = request.Price;
            product.CategoryId = request.CategoryId;
            product.OriginVillage = request.OriginVillage;

            
            await _repository.UpdateAsync(product);

            return product;
        }
    }
}
