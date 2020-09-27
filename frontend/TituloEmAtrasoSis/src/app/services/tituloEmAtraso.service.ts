import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import TituloEmAtraso from '../models/TituloEmAtraso';

@Injectable({
  providedIn: 'root'
})
export class TituloEmAtrasoService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<TituloEmAtraso[]> {
      return this.http
      .get(`${environment.apiBaseUrl}api/TitulosEmAtraso`)
      .pipe(map(x => <TituloEmAtraso[]>x))   
  }

  create(Titulo: any) {
    let parcelasDaDivida = []
    Titulo.parcelasDaDivida.forEach(x => {
      let parcela = {
        dataDeVencimento: new Date(x.dataDeVencimento),
        valor: Number(x.valor),
        numero: x.numero,
      }
      parcelasDaDivida.push(parcela);
    });
    var tituloEmAtraso = {
      numero: Titulo.numero,
      devedorNome: Titulo.devedorNome,
      devedorCPF: Titulo.devedorCPF,
      porcentagemJuros: Number(Titulo.porcentagemJuros),
      porcentagemMulta: Number(Titulo.porcentagemMulta),
      parcelasDaDivida: parcelasDaDivida,
    }
    return this.http.post(`${environment.apiBaseUrl}api/TitulosEmAtraso`, tituloEmAtraso);
  }
}
