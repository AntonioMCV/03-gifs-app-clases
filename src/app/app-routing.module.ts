import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './gifs/pages/home-page/home-page.component';
import { TrendingPageComponent } from './gifs/pages/trending-page/trending-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'trending',
    component: TrendingPageComponent,
  },
  {
    path: 'ciclos',
    loadChildren: () =>
      import('./ciclos/ciclos.module').then((m) => m.CiclosModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
