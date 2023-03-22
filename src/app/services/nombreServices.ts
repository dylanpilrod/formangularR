import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable()
export class nombreServices {

    constructor() { }

    bebidas: Bebidas[] = [];

    public signBebidas(nombreBebida: string, tipoAlcohol: string, gradosDeAlcohol: number, tipoMezcla: string, fechaCreacion: Date, campoEmail: string, mayorEdad: boolean): Observable<Bebidas[]> {
        if (nombreBebida != "") {
            this.bebidas.push({ nombreBebida: nombreBebida, tipoAlcohol: tipoAlcohol, gradosDeAlcohol: gradosDeAlcohol, tipoMezcla: tipoMezcla, fechaCreacion: fechaCreacion, campoEmail: campoEmail, mayorEdad: mayorEdad });
        } return of(this.bebidas);
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




