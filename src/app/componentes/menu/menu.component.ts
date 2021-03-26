import { Component, OnInit } from '@angular/core';
''

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public botones = [
    { title: 'Numero Aleatorio', url: '/componentes/numerorandom',id:"hola"},
    { title: 'Sorteo', url: '/componentes/sorteo',id:"hola"},
    { title: 'Porcentajes', url: '/componentes/porcentajes', icon: 'archive' ,id:"hola"}
  ];

  constructor() {
  }

  ionViewDidEnter()
  {
    for (let i = 0; i < this.botones.length; i++) {
      document.getElementsByTagName("button")[i].addEventListener('click',this.hoverSound);
      document.getElementsByTagName("button")[i].addEventListener('mouseover',this.clickSound);

    }
  }

  ngOnInit()
  {
  }

  // sound = new Audio('./../../../assets/sounds/clickText.mp3');

  clickSound()
  {
    let sound = new Audio('./../../../assets/sounds/pop.mp3');
    sound.play();
  }

  hoverSound()
  {
    let sound = new Audio('./../../../assets/sounds/clickText.mp3');
    sound.play();
  }

}
