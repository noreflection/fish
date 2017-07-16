using System.Collections.Generic;

namespace domain.Models.Abstract
{
    public interface IAuthorRepository
    {
        IEnumerable<Author> Authors { get; }
    }
}