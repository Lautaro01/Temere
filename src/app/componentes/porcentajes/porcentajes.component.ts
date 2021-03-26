import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentajes',
  templateUrl: './porcentajes.component.html',
  styleUrls: ['./porcentajes.component.scss'],
})
export class PorcentajesComponent implements OnInit {




  constructor() {

  }

  ngOnInit() {

    document.getElementById("calcular1").addEventListener("click",this.calcularProcentaje);
    document.getElementById("calcular2").addEventListener("click",this.calcularProcentaje2);


  }

  calcularProcentaje()
  {

    let porcentaje = (<HTMLInputElement>document.getElementById("porcentaje1")).value;
    let numero = (<HTMLInputElement>document.getElementById("numero1")).value;
    let resultado = (parseInt(porcentaje) / 100) * parseInt(numero);
    alert(resultado);
  }

  calcularProcentaje2()
  {
    let porcentaje = (<HTMLInputElement>document.getElementById("porcentaje2")).value;
    let numero = (<HTMLInputElement>document.getElementById("numero2")).value;
    let opcion = (<HTMLInputElement>document.getElementById("aod")).value;
    let porcentajeNumero = (parseInt(porcentaje) / 100) * parseInt(numero);

    if(opcion == "a")
    {
      let resultado = parseInt(numero) + porcentajeNumero
      alert(resultado);
    }
    else
    {
      let resultado = parseInt(numero) - porcentajeNumero;
      alert(resultado);
    }

  }

}
