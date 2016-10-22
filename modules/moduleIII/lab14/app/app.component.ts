import { Component } from '@angular/core';

 export class Ride {
 	units: number;
 	default: number;
 	festives: number;
 	airport: number;
    app_pp: number;
    total: number;
 }

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
    
    onSelect(valor: number) {
      this.ride.total = this.ride.total + valor;
      this.selected = this.ride.total;
    }
    onCalcular(unidades: number)
    {
      this.ride.total=unidades*this.ride.default;
      this.selected = this.ride.total;
    }
    onKey(event: number) {
    this.selected = event
  }
}


