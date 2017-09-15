using System.ComponentModel.DataAnnotations;

namespace ViewModels.Article
{
    public class CreateArticleViewModel
    {
        [Required]
        public string Headline { get; set; }
        [Required]
        public string Text { get; set; }
    }
}
