using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace domain.Models
{
    [Table("Chapters")]
    public class Chapter
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ChapterId { get; set; }

        public string ChapterName { get; set; }
        
        public int ChapterStartPage { get; set; }
        public int ChapterEndPage { get; set; }
    }
}
