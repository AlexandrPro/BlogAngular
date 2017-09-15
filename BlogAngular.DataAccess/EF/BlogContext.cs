using BlogAngular.Entities;
using System.Data.Entity;

namespace BlogAngular.DataAccess.EF
{
    public class BlogContext : DbContext
    {
        public BlogContext() : base("Blog")
        {
        }

        public virtual DbSet<Article> Articles { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        
        public static BlogContext Create()
        {
            return new BlogContext();
        }
    }
}
