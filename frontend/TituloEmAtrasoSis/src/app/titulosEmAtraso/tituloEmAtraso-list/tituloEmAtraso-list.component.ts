import { Component, OnInit } from '@angular/core';
import Parcela from 'src/app/models/Parcela';
import TituloEmAtraso from 'src/app/models/TituloEmAtraso';
import { TituloEmAtrasoService } from 'src/app/services/tituloEmAtraso.service';

@Component({
  selector: 'app-TituloEmAtraso-list',
  templateUrl: './tituloEmAtraso-list.component.html',
  styleUrls: ['./tituloEmAtraso-list.component.css']
})
export class TituloEmAtrasoListComponent implements OnInit {

  TituloEmAtrasos:TituloEmAtraso [] = [];

  constructor(private TituloEmAtrasoService: TituloEmAtrasoService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(){
    this.TituloEmAtrasoService
    .getAll()
    .subscribe(TituloEmAtrasos => {
      console.log(TituloEmAtrasos);
      TituloEmAtrasos.forEach(tituloResponse => {
        const diff = this.getDifferenceInDays(this.getOldestDate(tituloResponse.parcelasDaDivida));
        const updatedValue = this.getUpdatedValue(tituloResponse);
        const tituloUpdated = {
          ...tituloResponse,
          diasEmAtraso: diff,
          valorAtualizadoParaExibir: 'R$ ' + updatedValue.toFixed(2).replace('.',','),
        }
        this.TituloEmAtrasos.push(tituloUpdated);
      });   
    })
  }

  getOldestDate(parcelas:[Parcela]){
    return parcelas.sort(
      function(a, b) {
        var dateA:any = new Date(a.dataDeVencimento); 
        var dateB:any = new Date(b.dataDeVencimento);
        return dateA - dateB;
      })
    [0].dataDeVencimento;
  }

  getDifferenceInDays(date: any){
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate:any = new Date();
    const oldestDate:any = new Date(date);
    return Math.round(Math.abs((oldestDate - currentDate) / oneDay));
  }

  getUpdatedValue(titulo:TituloEmAtraso){
    let originalValue:number = 0;
    let interest:number = 0;
    titulo.parcelasDaDivida.forEach(parcela => { 
      originalValue += parcela.valor; 
      interest += ((titulo.porcentagemJuros / 100) / 30) * this.getDifferenceInDays(parcela.dataDeVencimento) * parcela.valor;
    });
    let valueWithCharges = originalValue * (titulo.porcentagemMulta/100);
    const updatedValue = originalValue + interest + valueWithCharges;
    return updatedValue;
  }
}
