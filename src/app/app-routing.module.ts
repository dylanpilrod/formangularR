import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './form/form/form.component';
import { DatosComponent } from './datos/datos/datos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormComponent },
  { path: 'datos', component: DatosComponent },
  { path: '', redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
