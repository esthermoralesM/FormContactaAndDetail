import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public usuario:Usuario;
  constructor(private servicioUsuario: UsuarioService) { 
    this.usuario=new Usuario("", "", "", "", "", "", "", null, null, "", "", null, "", "", "", "", "");
  }

  ngOnInit(): void {

  this.usuario=this.servicioUsuario.getUsuario();
  console.log("vistaaaa");
  console.log(this.usuario);
  }

}
