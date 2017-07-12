using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace domain.Models
{
    [Table("Books")]
    public class Book
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        // chapter navigation property
        public ICollection<Chapter> Chapters { get; set; }
    }
}