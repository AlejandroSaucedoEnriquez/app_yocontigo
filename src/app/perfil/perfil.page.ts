import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ServiciopService } from './serviciop.service';
import { HttpClient } from '@angular/common/http';
//import { Usuarios } from '../home/interfaces/usuarios';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

 
  perfilId: string;
  usuario;
  constructor(
    //private servicioTabs2: ServiciopService,
    private activatedRoute: ActivatedRoute, 
    private _http: HttpClient
    ) {}

  ngOnInit(){
    this.perfilId = this.activatedRoute.snapshot.paramMap.get('id')
    this._http.get('https://jsonplaceholder.typicode.com/users/' + this.perfilId)
    //this.servicioTabs2.ObtenerUsuarios()
    //.subscribe(res=>this.usuario = res)
    .subscribe(res=>this.usuario = res)
  }

}
