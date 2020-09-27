using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Repositories
{
    public interface ITituloEmAtrasoRepository
    {
        void Add(TituloEmAtraso tituloEmAtraso);
        IEnumerable<TituloEmAtraso> GetAll();
        TituloEmAtraso Find(Guid id);
        void Remove(Guid id);
        void Update(TituloEmAtraso tituloEmAtraso);
    }
}
