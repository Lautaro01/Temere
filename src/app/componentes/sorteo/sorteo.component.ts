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

  async agregarParticipante()
  {
    let participanteNuevo = {
      id : this.participantes.length + 1,
      nombre : ""
    }

    await this.participantes.push(participanteNuevo);

    await this.goEnd();

  }

  goEnd(){
    let elemento = document.getElementById("divTabla");
    elemento.scrollTop = 99999;
  }

  sortear(){

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

    var numeroRandomVar = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo).toString();

    return numeroRandomVar;
}

}
