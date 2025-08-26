using System;
using System.Threading.Tasks;
using AppDounia.Domain.Entities;
using AppDounia.Infrastructure.Repositories;
using AppDounia.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Xunit;
using FluentAssertions;

namespace AppDounia.Tests
{
    public class ProductTests
    {
        
        private AppDbContext GetInMemoryDbContext()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            var context = new AppDbContext(options);
            return context;
        }

        [Fact]
        public async Task AddProduct_ShouldAddProductSuccessfully()
        {
            
            var context = GetInMemoryDbContext();
            var repository = new ProductRepository(context);

            var product = new Product
            {
                Name = "Test Product",
                Description = "Test Description",
                Price = 10,
                CategoryId = 1,
                OriginVillage = "Test Village"
            };

            
            await repository.AddAsync(product);

            
            var addedProduct = await context.Products.FirstOrDefaultAsync(p => p.Name == "Test Product");
            addedProduct.Should().NotBeNull();
            addedProduct.Name.Should().Be("Test Product");
        }

        [Fact]
        public async Task UpdateProduct_ShouldUpdateProductSuccessfully()
        {
            
            var context = GetInMemoryDbContext();
            var repository = new ProductRepository(context);

            var product = new Product
            {
                Name = "Old Product",
                Description = "Old Description",
                Price = 5,
                CategoryId = 1,
                OriginVillage = "Old Village"
            };

            await repository.AddAsync(product);

            
            product.Name = "Updated Product";
            product.Description = "Updated Description";
            product.Price = 20;
            product.OriginVillage = "Updated Village";

            await repository.UpdateAsync(product);

            // Assert
            var updatedProduct = await context.Products.FirstOrDefaultAsync(p => p.Id == product.Id);
            updatedProduct.Name.Should().Be("Updated Product");
            updatedProduct.Description.Should().Be("Updated Description");
            updatedProduct.Price.Should().Be(20);
            updatedProduct.OriginVillage.Should().Be("Updated Village");
        }

        [Fact]
        public async Task DeleteProduct_ShouldDeleteProductSuccessfully()
        {
            
            var context = GetInMemoryDbContext();
            var repository = new ProductRepository(context);

            var product = new Product
            {
                Name = "ToDelete",
                Description = "Delete Description",
                Price = 15,
                CategoryId = 1,
                OriginVillage = "Village Delete"
            };

            await repository.AddAsync(product);

            
            await repository.DeleteAsync(product.Id);

            
            var deletedProduct = await context.Products.FirstOrDefaultAsync(p => p.Id == product.Id);
            deletedProduct.Should().BeNull();
        }

        [Fact]
        public async Task GetById_ShouldReturnCorrectProduct()
        {
            
            var context = GetInMemoryDbContext();
            var repository = new ProductRepository(context);

            var product = new Product
            {
                Name = "GetById Product",
                Description = "Description",
                Price = 12,
                CategoryId = 1,
                OriginVillage = "Village"
            };

            await repository.AddAsync(product);

            
            var fetchedProduct = await repository.GetByIdAsync(product.Id);

            
            fetchedProduct.Should().NotBeNull();
            fetchedProduct!.Name.Should().Be("GetById Product");
        }
    }
}
