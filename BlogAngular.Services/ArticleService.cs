using System;
using BlogAngular.DataAccess.EF;
using BlogAngular.DataAccess.Repositories;
using ViewModels.Article;
using System.Collections.Generic;
using System.Linq;
using BlogAngular.Entities;

namespace BlogAngular.Services
{
    public class ArticleService
    {
        BlogContext db;
        ArticleRepository articleRepository;

        public ArticleService()
        {
            db = new BlogContext();
            articleRepository = new ArticleRepository(db);
        }

        public IEnumerable<IndexArticleViewModel> GetAll()
        {
            return articleRepository.Get().Select(x => new IndexArticleViewModel
            {
                Id = x.Id,
                Headline = x.Headline,
                Text = x.Text.Length>200 ? x.Text.Substring(0,200) + "..." : x.Text,
            });
        }

        public DetailsArticleViewModel GetById(string articleId)
        {
            Article article = articleRepository.GetByID(articleId);
            //List<CommentViewModel> commentViewModels = article.Comments.Select(x => new CommentViewModel
            //{
            //    Text = x.Text,
            //}).ToList();
            
            return new DetailsArticleViewModel
            {
                Headline = article.Headline,
                Text = article.Text,
                //Comments = commentViewModels,
            };
        }

        public void Edit(string id, EditArticleViewModel articleViewModel)
        {
            Article article = articleRepository.GetByID(id);
            if (article != null)
            {
                article.Headline = articleViewModel.Headline;
                article.Text = articleViewModel.Text;

                articleRepository.Update(article);
                articleRepository.Save();
            }
            else
            {
                throw new ArgumentNullException("Wrong article id");
            }
        }

        public void Delete(string id)
        {
            Article article = articleRepository.GetByID(id);
            if(article != null)
            {
                articleRepository.Delete(article);
                articleRepository.Save();
            }
            else
            {
                throw new ArgumentNullException("Wrong article id");
            }
        }

        public void Create(CreateArticleViewModel articleViewModel)
        {
            articleRepository.Insert(new Article
            {
                Headline = articleViewModel.Headline,
                Text = articleViewModel.Text,
            });

            articleRepository.Save();
        }
    }
}
