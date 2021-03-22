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
    const input = (<HTMLInputElement>document.getElementById("inputNumeroSelect"));
    input.addEventListener("input",()=>{
      this.agregarParticipante(input.value);
    });
  }

  agregarParticipante(cantiad?)
  {
    if(cantiad){
      this.participantes = [];

      for (let i = 0; i < cantiad; i++) {
        let participanteNuevo = {
          id : this.participantes.length + 1,
          nombre : ""
        }
        
        this.participantes.push(participanteNuevo);
      }
    }
    else
    {
      if(cantiad !=0)
      {

        let participanteNuevo = {
          id : this.participantes.length + 1,
          nombre : ""
        }
        
        this.participantes.push(participanteNuevo);
      }
    }
      
    this.goEnd();

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

  quitarParticipante(id : number){
    this.participantes.splice((id-1),1);

    for (let i = 0; i < this.participantes.length; i++) {
      this.participantes[i].id = (i+1);
    }

  }

  numeroRandom(maximo : number, minimo : number) {

    var numeroRandomVar = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo).toString();

    return numeroRandomVar;
}

}
