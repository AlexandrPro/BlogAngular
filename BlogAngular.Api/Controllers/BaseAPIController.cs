using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BlogAngular.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BaseAPIController : ApiController
    {
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj),
                Encoding.UTF8, "application/json");
            return response;
        }
    }
}
