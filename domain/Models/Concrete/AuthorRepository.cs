using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using domain.Models.Abstract;

namespace domain.Models.Concrete
{
    public class AuthorRepository : IAuthorRepository
    {
        private ApplicationDbContext context { get; }

        public AuthorRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<Author> Authors => context.Authors;

        public void SaveAuthor(Author author)
        {
            var temp=author;
            if (author.AuthorId == 0)
            {
                context.Authors.Add(author);
            }
            else
            {
                Author dbEntry = context.Authors.FirstOrDefault(a => a.AuthorId == author.AuthorId);
                if(dbEntry!=null){
                    dbEntry.AuthorName=author.AuthorName;
                    //dbEntry.BooksCount=author.BooksCount;
                }
            }
            context.SaveChanges();
        }
    }
}
