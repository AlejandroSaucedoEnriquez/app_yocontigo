import { Component } from '@angular/core';
import { Usuarios } from './interfaces/usuarios';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: Usuarios[] = []
  constructor(private servicioTabs: ServicioService) {this.ObtenerU()}

  ObtenerU(){
    this.servicioTabs.ObtenerUsuarios()
    .subscribe({next:(data)=>this.usuarios = data})
  }

}
