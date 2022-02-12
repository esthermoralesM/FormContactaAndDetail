import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  public usuario:Usuario;
  constructor(public servicioUsuario: UsuarioService, private router:Router) { 
    this.usuario=new Usuario("", "", "", "", "", "", "", null, "", "", "", null, "", "", "", "", "");
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
  
  this.servicioUsuario.setUsuario(this.usuario);
  
      if((this.usuario.nombre&&this.usuario.apellidos&&this.usuario.dni&&this.usuario.genero &&this.usuario.telefono&&this.usuario.email&&this.usuario.calle
        &&this.usuario.numero!=null&&this.usuario.localidad&&this.usuario.codPostal!=null&&this.usuario.provincia&&this.usuario.pais 
        &&this.usuario.estudios&&this.usuario.profesion)!=''){
          console.log("generoooo");
          console.log(this.usuario.genero);
          alert("Te has registrado correctamente");
      this.router.navigate(['/vista']);
    }

  }
  
}
