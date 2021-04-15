import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { NumeroRandomComponent } from './numero-random/numero-random.component';
import { PorcentajesComponent } from './porcentajes/porcentajes.component';
import { SorteoComponent } from './sorteo/sorteo.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  }
  ,
  {
    path: 'numerorandom',
    component: NumeroRandomComponent,
  }
  ,
  {
    path: 'sorteo',
    component: SorteoComponent,
  }
  ,
  {
    path: 'porcentajes',
    component: PorcentajesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule { }
