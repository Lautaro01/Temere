import { Component, OnInit, Renderer2, ElementRef, ViewChild, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
''

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit, OnInit {

  public botones : Array<any> = [
    { title: 'Numero Aleatorio', url: '/componentes/numerorandom',id:"hola"},
    { title: 'Sorteo', url: '/componentes/sorteo',id:"hola"},
    { title: 'Porcentajes', url: '/componentes/porcentajes', icon: 'archive' ,id:"hola"}
  ];

  @ViewChildren('buttons') botonesRef : QueryList<ElementRef>

  constructor(private render : Renderer2, private element: ElementRef) {
  }

  /*
  ionViewDidEnter()
  {
    for (let i = 0; i < this.botones.length; i++) {
      document.getElementsByTagName("button")[i].addEventListener('click',this.hoverSound);
      document.getElementsByTagName("button")[i].addEventListener('mouseover',this.clickSound);

    }
  }*/

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
   this.botonesRef.forEach(
        componente => {
          this.render.listen(componente.nativeElement, "mouseover" , this.clickSound);
          this.render.listen(componente.nativeElement, "click" , this.hoverSound);
        }
      );
  }


  clickSound()
  {
    let sound = new Audio('./../../../assets/sounds/pop.mp3');
    // sound.muted = true;
    sound.play();
  }

  hoverSound()
  {
    let sound = new Audio('./../../../assets/sounds/clickText.mp3');
    // sound.muted = true;
    sound.play();
  }

}
