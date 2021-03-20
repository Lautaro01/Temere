import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss'],
})

export class SorteoComponent implements OnInit {

  participantes = [
    {
      id : 1,
      nombre : ''
    },
    {
      id : 2,
      nombre : ''
    }
  ];
    
  ganador = "?";

  constructor() { }

  ngOnInit() {
  }

  agregarParticipante()
  {
    let participanteNuevo = {
      id : this.participantes.length + 1,
      nombre : ""
    }

    this.participantes.push(participanteNuevo)
  }

  sortear()
  {



    for (let i = 1; i <= this.participantes.length; i++) {

      let id = i.toString();
      let idNum = i - 1;

      if((<HTMLInputElement>document.getElementById(id)).value == '')
      {
        console.log("Error");
        return;
      }

      this.participantes[idNum].nombre = (<HTMLInputElement>document.getElementById(id)).value;
    }



    let numero = this.numeroRandom((this.participantes.length-1),0)
    this.ganador = this.participantes[numero].nombre
    console.log( "Ganador " + this.participantes[numero].nombre + " Numero de jugadores: " + this.participantes.length);
  }

  numeroRandom(maximo : number, minimo : number) {

    if(maximo - minimo < 0)
    {
      // this.presentToastWithOptions("Eso da negativo, no tiene sentido hacer esto.s");

    }else if (maximo - minimo == 0 )
    { 
      // this.presentToastWithOptions("El maximo y el minimo no pueden ser iguales.");
    }
    else
    {
      var numeroRandomVar = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo).toString();
    }
    
    return numeroRandomVar;
}

}
