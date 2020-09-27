using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/titulosEmAtraso")]
    public class TituloEmAtrasoController : Controller
    {
        private readonly ITituloEmAtrasoRepository _tituloEmAtrasoRepository;

        public TituloEmAtrasoController(ITituloEmAtrasoRepository tituloEmAtrasoRepo)
        {
            _tituloEmAtrasoRepository = tituloEmAtrasoRepo;
        }

        [HttpGet]
        public IEnumerable<TituloEmAtraso> GetAll()
        {               
            return _tituloEmAtrasoRepository.GetAll();
        }

        [HttpPost]
        public IActionResult Create([FromBody] TituloEmAtraso tituloEmAtraso)
        {
            if (tituloEmAtraso == null)
                return BadRequest();

            var tituloId = Guid.NewGuid();
            tituloEmAtraso.TituloEmAtrasoId = tituloId;
            tituloEmAtraso.ParcelasDaDivida.ToList().ForEach(i => i.TituloEmAtrasoId = tituloId);

            _tituloEmAtrasoRepository.Add(tituloEmAtraso);

            return Ok();
        }
    }
}
