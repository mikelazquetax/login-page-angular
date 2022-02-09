import { UserRegister } from './../models/user.models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { milestoneDomain } from '../utils/customValidators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userRegisterForm: FormGroup; //para que no de por **** ponemos el initialization en false en el ts.config
  public submitted: boolean
  public usuarioLogin: UserRegister[]

  @Output() messageEvent = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioLogin = []
    this.userRegisterForm = this.formBuilder.group({ //con esto le decimos que queremos crear un grupo formulario para validar conjuntamente email y contraseña
      email: ['',[Validators.required, Validators.maxLength(75), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]], 
      password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]] //Minimum eight characters, at least one letter and one number:

    },
      {
      validator: milestoneDomain('email', 'password', 'password'),
     
    }  );

    this.submitted = false
       
  }

  onSubmit(e:any){
    this.submitted = true
    console.log(this.userRegisterForm)
    if(this.userRegisterForm.valid){
      const user: UserRegister = {
        email: this.userRegisterForm.get('email')?.value,
        password: this.userRegisterForm.get('password')?.value,
      }
     
       this.usuarioLogin.push(user)
     debugger
       this.messageEvent.emit(user)  
      console.log('Usuario registrado')
       console.log(user);
     /*  this.submitted = true */ 
    }
  }
}
