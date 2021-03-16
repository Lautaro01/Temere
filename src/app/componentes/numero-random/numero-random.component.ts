import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-random',
  templateUrl: './numero-random.component.html',
  styleUrls: ['./numero-random.component.scss'],
})
export class NumeroRandomComponent implements OnInit {

  constructor() { }

  numeroRandomVar = '?';

  numeroRandom() {

    let numeroMaximo = 100;
    let numeroMinimo = 1;

    if(numeroMaximo - numeroMinimo < 0)
    {
      alert("Error! el numero Minimo no puede ser mayor al numero Maximo");
      console.log("Error");
    }else if (numeroMaximo - numeroMinimo == 0 )
    {
      alert("Vos entendes que es al pedo no? Tarado xd");
    }
    else
    {
      this.numeroRandomVar = Math.floor((Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo).toString();
    }
    
}

  ngOnInit() {}

}
