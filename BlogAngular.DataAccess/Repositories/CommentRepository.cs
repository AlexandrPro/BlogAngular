using BlogAngular.Entities;
using System.Data.Entity;

namespace BlogAngular.DataAccess.Repositories
{
    public class CommentRepository : BaseRepository<Comment>
    {
        public CommentRepository(DbContext context) : base(context)
        {
        }
    }
}
