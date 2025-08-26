using AppDounia.Application.Interfaces;
using AppDounia.Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AppDounia.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<Product>> GetProductsAsync() => await _productRepository.GetAllAsync();
        public async Task<Product?> GetProductByIdAsync(int id) => await _productRepository.GetByIdAsync(id);
        public async Task AddProductAsync(Product product) => await _productRepository.AddAsync(product);
        public async Task UpdateProductAsync(Product product) => await _productRepository.UpdateAsync(product);
        public async Task DeleteProductAsync(int id) => await _productRepository.DeleteAsync(id);
    }
}
