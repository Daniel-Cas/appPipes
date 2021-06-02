import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent   {


// i18nSelect
  nombre : string = 'Daniel';
  genero : string = 'masculino'


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // i18lPrular

  clientes: string[] = ['Pepe','Pica','Pelón','Pilas']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'Tenemos # cliente esperando',
    'other': 'Tenemos # clientes esperando '
  }


  cambiarCliente() {
    this.nombre = 'Michel'
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop()
  }



  //KeyValue Pipe 
  persona ={
    nombre: 'Daniel',
    edad: 20,
    direccion: 'Fusagasugá, Cundinamarca'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },

    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) =>{

    setTimeout( () => {
      resolve( ' Tenemos data de promesa')
    }, 3500)
  });


}
