import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../components/app.component';
import { DetalleMateria } from '../components/detalle_materia.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                    AppComponent,    
                    DetalleMateria 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
