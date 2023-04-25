import { Component } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { SuperiorComponent } from './superior/superior.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(){}
  
  nuevoTitulo = "No sirvo";

  public cambiarTitulo(titulo:string){
    this.nuevoTitulo=titulo;
  }

}
