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
        
        // GET: api/Comment/5
        [HttpGet]
        public HttpResponseMessage Get(string articleId)
        {
            return ToJson(commentService.GetArticleComments(articleId));
        }

        // POST: api/Comment
        public HttpResponseMessage Post([FromBody]CreateCommentViewModel value)
        {
            commentService.Create(value);
            return ToJson(1);
        }

        // PUT: api/Comment/5
        public HttpResponseMessage Put(string id, [FromBody]EditCommentViewModel value)
        {
            if (value != null)
            {
                commentService.Edit(id, value);
                return ToJson(1);
            }
            else
            {
                throw new ArgumentNullException(nameof(value));
            }
        }

        // DELETE: api/Comment/5
        public HttpResponseMessage Delete(string id)
        {
            commentService.Delete(id);
            return ToJson(1);
        }
    }
}
