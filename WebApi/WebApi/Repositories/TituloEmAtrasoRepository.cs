using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Repositories
{
    public class TituloEmAtrasoRepository : ITituloEmAtrasoRepository
    {
        private readonly TituloEmAtrasoContext _contexto;

        public TituloEmAtrasoRepository(TituloEmAtrasoContext ctx)
        {
            _contexto = ctx;
        }

        public void Add(TituloEmAtraso tituloEmAtraso)
        {
            _contexto.TituloEmAtraso.Add(tituloEmAtraso);
            _contexto.SaveChanges();
        }

        public TituloEmAtraso Find(Guid id)
        {
            return _contexto.TituloEmAtraso.FirstOrDefault(u => u.TituloEmAtrasoId == id);
        }

        public IEnumerable<TituloEmAtraso> GetAll()
        {
            return _contexto.TituloEmAtraso.Include(x => x.ParcelasDaDivida).ToList();
        }

        public void Remove(Guid id)
        {
            var tituloEmAtraso = _contexto.TituloEmAtraso.FirstOrDefault(u => u.TituloEmAtrasoId == id);
            _contexto.TituloEmAtraso.Remove(tituloEmAtraso);
            _contexto.SaveChanges();
        }

        public void Update(TituloEmAtraso tituloEmAtraso)
        {
            _contexto.TituloEmAtraso.Update(tituloEmAtraso);
            _contexto.SaveChanges();
        }
    }
}
