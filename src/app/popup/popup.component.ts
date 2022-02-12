
import { popupModel } from './../models/popup.model';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  template: 'popup.component.html'

})

export class PopupComponent implements OnInit  {
//  public shown: boolean = false
@Input() shown: boolean
@Input() emailUser: string
@Input() idUser: string
@Input() passwordUser: string
@Input() arrayMiles: [] = []
@Input() direccionUser: string

  public title: string = 'Default Name';
  public id: number = 0;
  public date: Date;
  public text: string;
  public direccion: string;
  public data: popupModel[] = [];
 public contador: number = 0

 public milesarrayforPut:[] = []


  message: string = "Hello"

  @Output() messageEvent = new EventEmitter<any>();
 

  constructor( private _usuariosService: UsuariosService) { }
 
  ngOnInit(): void {

  }

  onButtonClick(){
    this.shown = true
  }
 
  closePopUp(event:any){
    console.log('closed')
    console.log(event)
    console.log(event.target)
    this.shown = !this.shown

    this.messageEvent.emit(this.data)

   //add comment
  }

  saveAction(event:any){
    this.contador = this.contador + 1
   console.log(this.title) 
   debugger


   if(this.direccionUser == undefined || this.direccionUser == 'derecha'){
    this.direccion = 'izquierda'
   }else{
     this.direccion = 'derecha'
   }


   if(this.contador == 1){
   this.arrayMiles.forEach((item)=>{
     this.data.push(item)
   })
  }

this.id = this.arrayMiles.length + 1

   const miles = {
     id : this.id.toString(),
    title : this.title,
    date : this.date,
    text : this.text,
    direccion: this.direccion,
    tachar: ''
   }
 
   console.log(this.data)
 
   if(miles.date == undefined || miles.title == undefined){
     alert('introduzca una fecha y un título')
   }else{
    this.data.push(miles)
    this.shown = !this.shown

   
  

    this._usuariosService.putUsuario(this.idUser , this.emailUser, this.passwordUser , this.data)

   this.messageEvent.emit(this.data)

   }
/*    this.id = this.id + 1 */

  }
}


