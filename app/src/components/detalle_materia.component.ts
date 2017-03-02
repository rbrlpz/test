import { Component } from '@angular/core';
//import {Materia} from '../interfaces/materias'

@Component({
    selector : 'materia-detalle',
    template : `
            <article class="articulo" *ngFor="let grupo of grupos">
            <p class="datos"> Grupo: <strong>{{grupo.grupo}}</strong></p>
            <p class="datos">Materia: <strong>{{grupo.materia}}</strong></p>
            <p class="datos">Horario: <strong>{{grupo.horario}}</strong></p>
            <p class="datos">Modalidad: <strong>{{grupo.modalidad}}</strong></p>
            <br> 
        </article>`
})
export class DetalleMateria{
    grupos : Materia[] = [
        {
            grupo: "8AW",
            materia: "Desarrollo web profesional",
            horario: "13 - 14 hrs",
            modalidad:":D"

        },{
            grupo: "7Y",
            materia: "Conmutación y enrutamiento de redes de datos",
            horario: "9 - 10 hrs",
            modalidad: "Distancia"
        }
        ]
}