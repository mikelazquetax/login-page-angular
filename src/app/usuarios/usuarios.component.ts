import { UsuariosService } from './usuarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UserRegister } from '../models/user.models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private _usuariosService: UsuariosService) { }
  public usuarios: UserRegister[]
 

  ngOnInit(): void {
    this.usuarios = []
    this._usuariosService.getUsuarios().subscribe((res:any)=>{
     
      console.log(res)
      this.usuarios = res
    })
    
    
  }
  receiveMessage($event:any){
    debugger

    const found =   this.usuarios.filter((item=> item.email == $event.email))
   
    if (found.length == 0){
      alert('Usuario no Registrado')
    }else{
      alert('Bienvenido')
    }
    
    
    
   
    
/*     console.log(this.usuarios) */
   
  }
}
