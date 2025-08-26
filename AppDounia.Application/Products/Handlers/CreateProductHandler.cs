using AppDounia.Application.Interfaces;
using AppDounia.Domain.Entities;
using AppDounia.Application.Products.Commands;
using MediatR;

namespace AppDounia.Application.Products.Handlers
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, Product>
    {
        private readonly IProductRepository _repository;

        public CreateProductHandler(IProductRepository repository)
        {
            _repository = repository;
        }

        public async Task<Product> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = new Product
            {
                Name = request.Name,
                Price = request.Price,
                Description = request.Description,
                CategoryId = request.CategoryId,
                OriginVillage = request.OriginVillage
            };

            await _repository.AddAsync(product);
            return product;
        }
    }
}
