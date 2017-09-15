using BlogAngular.Entities;
using System.Data.Entity;

namespace BlogAngular.DataAccess.Repositories
{
    public class ArticleRepository : BaseRepository<Article>
    {
        public ArticleRepository(DbContext context) : base(context)
        {
        }
    }
}
