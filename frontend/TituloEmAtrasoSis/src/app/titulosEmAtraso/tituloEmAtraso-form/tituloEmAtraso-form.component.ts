import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TituloEmAtrasoService } from 'src/app/services/tituloEmAtraso.service';
import TituloEmAtraso from 'src/app/models/TituloEmAtraso';
import Parcela from 'src/app/models/Parcela';

@Component({
  selector: 'app-TituloEmAtraso-form',
  templateUrl: './tituloEmAtraso-form.component.html',
  styleUrls: ['./tituloEmAtraso-form.component.css']
})
export class TituloEmAtrasoFormComponent implements OnInit {

  formulario:FormGroup;
  Parcelas: [Parcela];

  constructor(private formBuilder: FormBuilder,
              private service: TituloEmAtrasoService,
              private router : Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      numero:[null, Validators.required],
      devedorNome:[null, Validators.required],
      devedorCPF:[null, Validators.required],
      porcentagemJuros:[null, Validators.required],
      porcentagemMulta:[null, Validators.required],
      numeroParcela:[null],
      dataDeVencimento:[null],
      valor:[null]
    });
  }

  criar() {
    let TituloEmAtraso : TituloEmAtraso = Object.assign({}, this.formulario.value);
    if (this.formulario.invalid) {
      alert("existem campos inválidos");
      return;
    }
    if (this.Parcelas.length <= 0) {
      alert("é necessario adicionar ao menos uma parcela");
      return;
    } else {
      TituloEmAtraso.parcelasDaDivida = this.Parcelas;
    }
    
    this.service.create(TituloEmAtraso)
    .subscribe(() => this.OnSaveSucess()),
    error => console.error(error);            
  }

  OnSaveSucess(){   
    alert("Cadastrado com successo.");
    this.router.navigate(["/TituloEmAtrasos"]);
  }

  adicionarParcela() {
    let form = this.formulario.value;
    if (!form.dataDeVencimento || !form.numeroParcela || !form.valor) {
      alert("existem campos inválidos");
      return;
    }
    
    let parcela: Parcela = {
      parcelaId: null,
      tituloEmAtrasoId: null,
      dataDeVencimento: form.dataDeVencimento,
      valor: form.valor,
      numero: form.numeroParcela,
    }
    if (this.Parcelas === undefined) {
      this.Parcelas = [parcela];
    } else {
      this.Parcelas.push(parcela);
    }
    this.formulario.controls['valor'].reset()
    this.formulario.controls['numeroParcela'].reset()
    this.formulario.controls['dataDeVencimento'].reset()
  }
}
