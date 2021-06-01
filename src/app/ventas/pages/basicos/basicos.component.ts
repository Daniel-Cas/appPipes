import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent   {
  

  nombreLower   : string = 'daniel castillo';
  nombreUpper   : string = 'DANIEL CASTILLO';
  nombreCompleto: string = 'daniel matthew castillo achury';

  fecha: Date = new Date(); //el día de hoy









  // Muestras de buenas prácticas. 

  //TODO: Hacer lista ordenada 


  //FIXME: Apartir de aca debo repararme 
  constructor() { }

 

}
