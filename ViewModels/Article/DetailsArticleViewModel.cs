using System.Collections.Generic;

namespace ViewModels.Article
{
    public class DetailsArticleViewModel
    {
        public string Headline { get; set; }
        public string ShortText { get; set; }
        public IEnumerable<CommentViewModel> Comments { get; set; }
    }

    public class CommentViewModel
    {
        public string Text { get; set; }
    }
}
