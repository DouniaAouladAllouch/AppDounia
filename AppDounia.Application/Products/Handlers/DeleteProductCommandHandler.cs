using AppDounia.Application.Interfaces;
using AppDounia.Application.Products.Commands;
using MediatR;

namespace AppDounia.Application.Products.Handlers
{
    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand, Unit>
    {
        private readonly IProductRepository _repository;

        public DeleteProductCommandHandler(IProductRepository repository)
        {
            _repository = repository;
        }

        public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _repository.GetByIdAsync(request.Id);
            if (product == null)
            {
                throw new KeyNotFoundException($"Produit avec Id {request.Id} introuvable.");
            }

            await _repository.DeleteAsync(request.Id);

            return Unit.Value;
        }
    }
}
