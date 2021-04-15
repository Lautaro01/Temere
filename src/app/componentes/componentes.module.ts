import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { IonicModule } from '@ionic/angular';

import { MenuComponent} from "./menu/menu.component";
import { NumeroRandomComponent } from './numero-random/numero-random.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { PorcentajesComponent } from "./porcentajes/porcentajes.component";

@NgModule({
  declarations: [
    MenuComponent,
    NumeroRandomComponent,
    SorteoComponent,
    PorcentajesComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentesRoutingModule,
    FormsModule
  ]
})
export class ComponentesModule { }
