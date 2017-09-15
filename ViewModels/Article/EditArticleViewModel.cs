using System.ComponentModel.DataAnnotations;

namespace ViewModels.Article
{
    public  class EditArticleViewModel
    {
        [Required]
        public string Headline { get; set; }
        [Required]
        public string Text { get; set; }
    }
}
