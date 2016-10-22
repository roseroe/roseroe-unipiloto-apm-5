import { Component } from '@angular/core';
import { Ride } from './model/ride';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html' 
})
export class AppComponent {
	title: string="Mi Carrera";

   
    ride: Ride = {
        units: 50,
        default: 4100,
        festives: 1900,
        airport: 3900,
        app_pp:700,
        total: 4100
    }
    
    selected: number;
    values: string;
    boolfestive: boolean =false;
    boolairport: boolean=false;
    boolapp_pp: boolean=false;

    onSelect(valor: number) {
      if(valor===this.ride.festives){
         if(!this.boolfestive)
         {
             this.ride.total = this.ride.total + valor;
         } 
         this.boolfestive=true;
      }
      if(valor===this.ride.airport){
        if(!this.boolairport)
         {
             this.ride.total = this.ride.total + valor;
         } 
        this.boolairport=true;
      }
      if(valor===this.ride.app_pp){
         if(!this.boolapp_pp)
         {
             this.ride.total = this.ride.total + valor;
         } 
        this.boolapp_pp=true;
      }
      this.selected = this.ride.total;
    }

    onCalcular(unidades: number)
    {
      if(unidades>50)
      {
          this.ride.total=unidades*this.ride.default/50;
      }
      this.selected = this.ride.total; 
      this.boolairport=false;
      this.boolapp_pp=false;
      this.boolfestive=false;
    }
}


