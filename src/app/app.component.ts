import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu Principal', url: '/componentes', icon: 'mail' },
    { title: 'Numero Aleatorio', url: '/componentes/numerorandom', icon: 'paper-plane' },
    { title: 'Sorteo', url: '/componentes/sorteo', icon: 'heart' },
    { title: 'Porcentajes', url: '/componentes/porcentajes', icon: 'archive' },
  ];

  constructor() {}
}
