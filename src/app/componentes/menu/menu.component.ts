import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public botones = [
    { title: 'Numero Aleatorio', url: '/componentes/numerorandom'},
    { title: 'Sorteo', url: '/componentes/sorteo'},
    { title: 'Porcentajes', url: '/componentes/porcentajes', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];


  constructor() { }



  ngOnInit() {}

}
