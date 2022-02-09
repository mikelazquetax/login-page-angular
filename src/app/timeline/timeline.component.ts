import { popupModel } from './../models/popup.model';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-timeline',
   templateUrl: './timeline.component.html', 
  template: './timeline.component.html',
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



  constructor() { }

  ngOnInit(): void {

    
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
   this.data = $event
   this.showPopUp = false
 }


}
