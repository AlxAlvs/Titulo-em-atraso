using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class TituloEmAtraso
    {
        public Guid TituloEmAtrasoId { get; set; }
        public int Numero { get; set; }
        public string DevedorNome { get; set; }
        public string DevedorCPF { get; set; }
        public double PorcentagemJuros { get; set; }
        public double PorcentagemMulta { get; set; }
        public IEnumerable<Parcela> ParcelasDaDivida { get; set; }

        public TituloEmAtraso(int numero, string devedorNome, string devedorCPF, double porcentagemJuros, double porcentagemMulta, IEnumerable<Parcela> parcelasDaDivida)
        {
            TituloEmAtrasoId = Guid.NewGuid();
            Numero = numero;
            DevedorNome = devedorNome;
            DevedorCPF = devedorCPF;
            PorcentagemJuros = porcentagemJuros;
            PorcentagemMulta = porcentagemMulta;
            ParcelasDaDivida = parcelasDaDivida;
        }

        public TituloEmAtraso(Guid tituloEmAtrasoId, int numero, string devedorNome, string devedorCPF, double porcentagemJuros, double porcentagemMulta, IEnumerable<Parcela> parcelasDaDivida)
        {
            TituloEmAtrasoId = tituloEmAtrasoId;
            Numero = numero;
            DevedorNome = devedorNome;
            DevedorCPF = devedorCPF;
            PorcentagemJuros = porcentagemJuros;
            PorcentagemMulta = porcentagemMulta;
            ParcelasDaDivida = parcelasDaDivida;
        }

        public TituloEmAtraso()
        {
        }
    }
}
