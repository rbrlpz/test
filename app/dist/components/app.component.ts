import { Component } from '@angular/core';
import { Materia } from '../interfaces/materias';
import { DetalleMateria } from '../components/detalle_materia.component';

/* hola */ 
@Component({
  selector: 'app-root',
  templateUrl: '../components/templates/datos.html',
  styleUrls:[  '../app/components/templates/datos.css'],
  directives : [DetalleMateria]
})
export class AppComponent  { 
    name = 'Rober Lopez'; 
    
    }


