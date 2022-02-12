import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario:Usuario;

  constructor() { }

  public getUsuario(){
    return this.usuario;
  }

  public setUsuario(usuario:Usuario){
    this.usuario=usuario;
  }
}
