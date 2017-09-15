using BlogAngular.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ViewModels.Comment;

namespace BlogAngular.Api.Controllers
{
    public class CommentController : BaseAPIController
    {
        CommentService commentService;
        public CommentController()
        {
            commentService = new CommentService();
        }

        // GET: api/Comment
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET: api/Comment/5
        //public HttpResponseMessage Get(string articleId)
        //{
        //    return ToJson(commentService.GetArticleComments(articleId));
        //}

        // POST: api/Comment
        public void Post([FromBody]CreateCommentViewModel value)
        {
            commentService.Create(value);
        }

        // PUT: api/Comment/5
        public void Put(string id, [FromBody]EditCommentViewModel value)
        {
            if (value != null)
            {
                commentService.Edit(id, value);
            }
            else
            {
                throw new ArgumentNullException(nameof(value));
            }
        }

        // DELETE: api/Comment/5
        public void Delete(string id)
        {
            commentService.Delete(id);
        }
    }
}
