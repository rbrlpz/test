import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DetalleMateria } from './detalle_materia.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                    AppComponent,    
                    DetalleMateria 
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
