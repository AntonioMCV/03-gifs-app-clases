import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosPageComponent } from './page/ciclos-page/ciclos-page.component';

const routes: Routes = [
  {
    path: '',
    component: CiclosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiclosRoutingModule {}
