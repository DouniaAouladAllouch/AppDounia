using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDounia.Domain.Entities
{
    public class Product
    {

        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Price { get; set; }

        // Clé étrangère vers Category
        public int CategoryId { get; set; }
        public Category Category { get; set; } = null!;  

        public string OriginVillage { get; set; } = string.Empty;
    }
}
