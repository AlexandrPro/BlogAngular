namespace BlogAngular.Entities
{
    public class Comment : BaseEntity
    {
        public string Text { get; set; }
        public virtual Article Article { get; set; }
    }
}
