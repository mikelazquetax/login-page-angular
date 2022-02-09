
import { popupModel } from './../models/popup.model';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  template: 'popup.component.html'

})

export class PopupComponent implements OnInit  {
//  public shown: boolean = false
@Input() shown: boolean
  public title: string = 'Default Name';
  public id: number = 0;
  public date: Date;
  public text: string;
  public direccion: string;
  public data: popupModel[] = [];
 

  message: string = "Hello"

  @Output() messageEvent = new EventEmitter<any>();
 

  constructor() { }
 
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
   console.log(this.title) 
   
   if(this.direccion == undefined || this.direccion == 'derecha'){
    this.direccion = 'izquierda'
   }else{
     this.direccion = 'derecha'
   }
   

   const miles = {
     id : this.id,
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

   this.messageEvent.emit(this.data)

   }
   this.id = this.id + 1

  }
}


