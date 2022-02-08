import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../models/user.models';
import { UsuariosService } from '../usuarios/usuarios.service';
import { milestoneDomain } from '../utils/customValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userSignup: FormGroup;
  public submitted: boolean;
  public usuarios: UserRegister[]
  constructor(private formBuilder: FormBuilder, private _usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarios = []
    this._usuariosService.getUsuarios().subscribe((res:any)=>{
     
      console.log(res)
      this.usuarios = res
    })
    this.userSignup = this.formBuilder.group( { //con esto le decimos que queremos crear un grupo formulario para validar conjuntamente email y contraseña
      email: ['',[Validators.required, Validators.maxLength(75), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]], 
      password: ['', [Validators.required]],
	    passwordRepeat: ['', [Validators.required]]
    }, 
      {
      
        validators: milestoneDomain('email','password', 'passwordRepeat'),
      /*   comparePassword('password', 'passwordRepeat') */
      },
 
 );
    this.submitted = false
  }

  onNewUser(event:any){
    this.submitted = true
    console.log(this.userSignup)

    console.log(this.userSignup.value.email)
   /*  this.usuarios */
  }

}
