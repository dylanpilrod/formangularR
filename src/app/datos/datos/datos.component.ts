import { Component } from '@angular/core';
import { nombreServices } from 'src/app/services/nombreServices';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  bebidas: Bebidas[] = [];

  nombreBebida: any="";
  tipoAlcohol: any="";
  gradosDeAlcohol: any="";
  tipoMezcla: any="";
  fechaCreacion: any="";
  campoEmail: any="";
  mayorEdad: any="";

  constructor(private nombreServices:nombreServices){}

  ngOnInit(): void{
    this.nombreServices.signBebidas(this.nombreBebida, 
      this.tipoAlcohol,
      this.gradosDeAlcohol,
      this.tipoMezcla,
      this.fechaCreacion,
      this.campoEmail,
      this.mayorEdad).subscribe((bebidas:Bebidas[])=>{
        this.bebidas = bebidas;
      });
  }
}
export interface Bebidas {
  nombreBebida: string,
  tipoAlcohol: string,
  gradosDeAlcohol: number,
  tipoMezcla: string,
  fechaCreacion: Date,
  campoEmail: string,
  mayorEdad: boolean
}  