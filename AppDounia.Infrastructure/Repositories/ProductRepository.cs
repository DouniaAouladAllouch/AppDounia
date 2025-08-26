using AppDounia.Application.Interfaces;
using AppDounia.Domain.Entities;
using AppDounia.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace AppDounia.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _context.Products
                                 .Include(p => p.Category)
                                 .ToListAsync();
        }

        public async Task<Product?> GetByIdAsync(int id)
        {
            return await _context.Products
                                 .Include(p => p.Category)
                                 .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task AddAsync(Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Product updatedProduct)
        {
            // Récupérer le produit existant depuis la base
            var product = await _context.Products.FindAsync(updatedProduct.Id);
            if (product == null)
                throw new KeyNotFoundException($"Produit avec Id {updatedProduct.Id} introuvable.");

            // Mettre à jour les champs
            product.Name = updatedProduct.Name;
            product.Description = updatedProduct.Description;
            product.Price = updatedProduct.Price;
            product.CategoryId = updatedProduct.CategoryId;
            product.OriginVillage = updatedProduct.OriginVillage;

            // Sauvegarder les modifications dans la base
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
        }
    }
}
