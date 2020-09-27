import Parcela from './Parcela';

export default interface TituloEmAtraso {
    tituloEmAtrasoId:number;
    numero:number;
    devedorNome:string;
    devedorCPF:string;
    porcentagemJuros:number;
    porcentagemMulta:number;
    parcelasDaDivida: [Parcela];
    diasEmAtraso:number;
    valorAtualizado:number;
    valorAtualizadoParaExibir:string;
}