import { Component } from '@angular/core';
/* hola */ 
@Component({
  selector: 'my-app',
  template: `<h1>Profesor: {{name}}</h1>
            <article *ngFor="let grupo of grupos">
                <p>grupo: <strong>{{grupo.grupo}}</strong></p>
                <p>materia: <strong>{{grupo.materia}}</strong></p>
                <p>horario: <strong>{{grupo.horario}}</strong></p>
                <p>modalidad: <strong>{{grupo.modalidad}}</strong></p>
            </article>
            `,
})
export class AppComponent  { 
    name = 'Rober Lopez'; 
    grupos= [
        {
            grupo: "8AW",
            materia: "Desarrollo web profesional",
            horario : "13 - 14 hrs",
        },{
            grupo: "7Y",
            materia: "Conmutacion y enrutamiento de redes de datos",
            horario : "9 - 10 hrs",
            modalidad : "distancia"
        }
        ]
    }
