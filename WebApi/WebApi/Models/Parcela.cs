using System;

namespace WebApi.Models
{
    public class Parcela
    {
        public Guid ParcelaId { get; set; }
        public Guid TituloEmAtrasoId { get; set; }
        public TituloEmAtraso TituloEmAtraso { get; set; }
        public int Numero { get; set; }
        public DateTime DataDeVencimento { get; set; }
        public double Valor { get; set; }

        public Parcela(int numero, DateTime dataDeVencimento, double valor)
        {
            ParcelaId = Guid.NewGuid();
            Numero = numero;
            DataDeVencimento = dataDeVencimento;
            Valor = valor;
        }

        public Parcela(Guid parcelaId, Guid tituloEmAtrasoId, TituloEmAtraso tituloEmAtraso, int numero, DateTime dataDeVencimento, double valor)
        {
            ParcelaId = parcelaId;
            TituloEmAtrasoId = tituloEmAtrasoId;
            TituloEmAtraso = tituloEmAtraso;
            Numero = numero;
            DataDeVencimento = dataDeVencimento;
            Valor = valor;
        }

        public Parcela()
        {
        }
    }
}
