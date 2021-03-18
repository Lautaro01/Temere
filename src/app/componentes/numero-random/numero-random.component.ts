import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-numero-random',
  templateUrl: './numero-random.component.html',
  styleUrls: ['./numero-random.component.scss'],
})
export class NumeroRandomComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  numeroRandomVar = '?';
  numeroMaximo = 100;
  numeroMinimo = 1;

  numeroRandom() {

    console.log(this.numeroMaximo);
    if(this.numeroMaximo - this.numeroMinimo < 0)
    {
      this.presentToastWithOptions("Eso da negativo, no tiene sentido hacer esto.s");

    }else if (this.numeroMaximo - this.numeroMinimo == 0 )
    {
      this.presentToastWithOptions("El maximo y el minimo no pueden ser iguales.");
    }
    else
    {
      this.numeroRandomVar = Math.floor((Math.random() * (this.numeroMaximo - this.numeroMinimo + 1)) + this.numeroMinimo).toString();
    }
    
}

  ngOnInit() {}

  async presentToastWithOptions(mensaje : string) {
    const toast = await this.toastController.create({
      header: 'Error',
      message: mensaje,
      color: 'danger',
      position: 'top',
      buttons: [
        {
          text: 'x',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
