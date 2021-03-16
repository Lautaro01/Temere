import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu Principal', url: '/componentes/menu', icon: 'mail' },
    { title: 'Numero Random', url: '/componentes/numerorandom', icon: 'paper-plane' },
    { title: 'Sorteo', url: '/componentes/sorteo', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor() {}
}
