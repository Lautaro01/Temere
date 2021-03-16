import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
//Componentes creados
import { MenuComponent} from "./componentes/menu/menu.component";
import { NumeroRandomComponent } from './componentes/numero-random/numero-random.component';
import { SorteoComponent } from './componentes/sorteo/sorteo.component';
//-----//
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent,
  MenuComponent,
  NumeroRandomComponent,
  SorteoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}