import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MenuComponent} from './componentes/menu/menu.component';
import { NumeroRandomComponent} from './componentes/numero-random/numero-random.component';
import { PorcentajesComponent } from './componentes/porcentajes/porcentajes.component';
import { SorteoComponent } from './componentes/sorteo/sorteo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'componentes/menu',
    pathMatch: 'full'
  },
  {
    path: 'componentes/menu',
    component: MenuComponent,
  }
  ,
  {
    path: 'componentes/numerorandom',
    component: NumeroRandomComponent,
  }
  ,
  {
    path: 'componentes/sorteo',
    component: SorteoComponent,
  }
  ,
  {
    path: 'componentes/menu',
    component: MenuComponent,
  },
  {
    path: 'componentes/porcentajes',
    component: PorcentajesComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
