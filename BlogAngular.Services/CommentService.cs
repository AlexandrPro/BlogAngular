using BlogAngular.DataAccess.EF;
using BlogAngular.DataAccess.Repositories;
using BlogAngular.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using ViewModels.Comment;

namespace BlogAngular.Services
{
    public class CommentService
    {
        BlogContext db;
        CommentRepository commentRepository;

        public CommentService()
        {
            db = new BlogContext();
            commentRepository = new CommentRepository(db);
        }

        public IEnumerable<IndexCommentViewModel> GetArticleComments(string articleId)
        {
            return commentRepository.Get(c => c.Article.Id == articleId)
                .Select(x => new IndexCommentViewModel
            {
                Id = x.Id,
                Text = x.Text,
            });
        }

        public void Create(CreateCommentViewModel value)
        {
            commentRepository.Insert(new Comment
            {
                Text = value.Text,
            });

            commentRepository.Save();
        }

        public void Edit(string id, EditCommentViewModel commentViewModel)
        {
            Comment comment = commentRepository.GetByID(id);
            if (comment != null)
            {
                comment.Text = commentViewModel.Text;

                commentRepository.Update(comment);
                commentRepository.Save();
            }
            else
            {
                throw new ArgumentNullException("Wrong comment id");
            }
        }

        public void Delete(string id)
        {
            Comment comment = commentRepository.GetByID(id);
            if (comment != null)
            {
                commentRepository.Delete(comment);
                commentRepository.Save();
            }
            else
            {
                throw new ArgumentNullException("Wrong comment id");
            }
        }
    }
}
