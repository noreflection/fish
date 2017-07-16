using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using domain.Models;
using domain.Models.Abstract;
using domain.Models.Concrete;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        private IAuthorRepository repository;

        public TestController(IAuthorRepository repository)
        {
            this.repository = repository;
        }


        // GET api/values
        [HttpGet]
        //public IEnumerable<string> Get()
        public IEnumerable<Author> Get()
        {
            return repository.Authors;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
