import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiclosPageComponent } from './page/ciclos-page/ciclos-page.component';
import { PriceComponent } from './components/price/price.component';



@NgModule({
  declarations: [
    CiclosPageComponent,
    PriceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CiclosModule { }
