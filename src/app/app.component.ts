import { Component } from '@angular/core';
import { Materia } from './materias';
import { DetalleMateria } from './detalle_materia.component';

/* hola */ 
@Component({
  selector: 'app-root',
  templateUrl: './app/datos.html',
  styleUrls:['./app/datos.css'],
  directives : [DetalleMateria]
})
export class AppComponent  { 
    name = 'Rober Lopez'; 
    
    }


