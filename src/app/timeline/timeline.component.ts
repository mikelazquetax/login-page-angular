import { ActivatedRoute, Router } from '@angular/router';

import { popupModel } from './../models/popup.model';
import { Component, EventEmitter, Output} from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';



@Component({
  selector: 'app-timeline',
    templateUrl: './timeline.component.html' , 
 template: ``,
  styleUrls: ['./timeline.component.scss'],
   
})
export class TimelineComponent  {
/* public isViewFirst: boolean = true
public items: string[] = ['Toma Inicial de Requerimientos', 'Demo', 'BBP'] */
@Output() onoffEvent = new EventEmitter()
public milestoneInTime: string[] = []
showPopUp: boolean = false;
tachar: string;
data: popupModel[] = []
userLogged: string
email:string = ''
arrayMilestonesApi:[] = []
  constructor(  private _usuariosService: UsuariosService, private route: ActivatedRoute) { 

  
  }

  ngOnInit(): void {
     this.route.queryParams.subscribe((params:any)=>{
       console.log(params)
       this.email = params.data
     })

     this._usuariosService.getUsuarios().subscribe((res:any)=>{
     
      console.log(res)
      
    const Usuario =  res.filter((miles:any)=>{
        return miles.email == this.email
      })
      console.log(Usuario[0].milestones)
      this.arrayMilestonesApi = Usuario[0].milestones
      let i: number = 0
      debugger

      this.arrayMilestonesApi.forEach((milestone:any)=>{
       this.data.push(milestone)


        i = i + 1
      })
      
    })
  }

  
 onButtonClick(){

 this.showPopUp = true

/* this.onoffEvent.emit(this.showPopUp)  */
  }

  public Eliminar(data:any): void{
    console.log(this.data)
  
    const index = this.data.findIndex((item)=>item.id === data.id)
    const list = this.data.splice(index,1)
  }

  public Tachar(data:any):void{
    const index = this.data.findIndex((item)=>item.id === data.id)
    if(data.tachar !== 'tachado'){
      data.tachar = 'tachado'
    }else{
      data.tachar = ''
    }
   
  }


 receiveMessage($event:any){
  debugger
   this.data = $event
   this.showPopUp = false
 }



}
