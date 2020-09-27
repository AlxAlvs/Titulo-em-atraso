import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TituloEmAtrasoFormComponent } from './titulosEmAtraso/tituloEmAtraso-form/tituloEmAtraso-form.component';
import { TituloEmAtrasoListComponent } from './titulosEmAtraso/tituloEmAtraso-list/tituloEmAtraso-list.component';


const routes: Routes = [
  {path: '', component: TituloEmAtrasoFormComponent},
  {path: 'TituloEmAtrasos', component: TituloEmAtrasoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
