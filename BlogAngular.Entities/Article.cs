using System.Collections.Generic;

namespace BlogAngular.Entities
{
    public  class Article : BaseEntity
    {
        public string Headline { get; set; }
        public string Text { get; set; }
        public virtual List<Comment> Comments { get; set; }
    }
}
