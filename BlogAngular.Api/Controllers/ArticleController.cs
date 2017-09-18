using BlogAngular.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ViewModels.Article;

namespace BlogAngular.Api.Controllers
{
    public class ArticleController : BaseAPIController
    {
        ArticleService articleService;
        public ArticleController()
        {
            articleService = new ArticleService();
        }

        // GET: api/Article
        public HttpResponseMessage Get()
        {
            return ToJson(articleService.GetAll());
        }


        // GET: api/Article/5
        public HttpResponseMessage Get(string articleId)
        {
            return ToJson(articleService.GetById(articleId));
        }

        // POST: api/Article
        public void Post([FromBody]CreateArticleViewModel value)
        {
            articleService.Create(value);
        }

        // PUT: api/Article/5
        public void Put(string id, [FromBody]EditArticleViewModel value)
        {
            if (value != null)
            {
                articleService.Edit(id, value);
            }
            else
            {
                throw new ArgumentNullException(nameof(value));
            }
        }

        // DELETE: api/Article/5
        public void Delete(string id)
        {
            articleService.Delete(id);
        }
    }
}
