import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { nombreServices } from 'src/app/services/nombreServices';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  bebidas: Bebidas[] = [ ];
  customVal(mayorEdad: FormControl){
    if (mayorEdad.value == false){return{mayorEdad};}
    else{return null;}
  }

  nombreBebida: FormControl = new FormControl('', [Validators.minLength(5), Validators.maxLength(25), Validators.required]);
  tipoAlcohol: FormControl = new FormControl('', Validators.required);
  gradosDeAlcohol: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  tipoMezcla: FormControl = new FormControl('', Validators.required);
  fechaCreacion: FormControl = new FormControl('', Validators.required);
  campoEmail: FormControl = new FormControl('', [Validators.required,Validators.pattern(/.+@.+\..+/)]);
  mayorEdad: FormControl = new FormControl('', [Validators.required, this.customVal]);

  Form: FormGroup = new FormGroup({nombreBebida: this.nombreBebida,
                                        tipoAlcohol: this.tipoAlcohol,
                                        gradosDeAlcohol: this.gradosDeAlcohol,
                                        tipoMezcla: this.tipoMezcla,
                                        fechaCreacion: this.fechaCreacion,
                                        campoEmail: this.campoEmail,
                                        mayorEdad: this.mayorEdad});
  constructor(private nombreServices:nombreServices){}
  ngOnInit(){}
  Clic(datos:FormGroup){
    console.log(datos);
  this.nombreServices.signBebidas(this.nombreBebida.value, 
    this.tipoAlcohol.value,
    this.gradosDeAlcohol.value,
    this.tipoMezcla.value,
    this.fechaCreacion.value,
    this.campoEmail.value,
    this.mayorEdad.value)
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