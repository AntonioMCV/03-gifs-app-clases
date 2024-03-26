import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiclosPageComponent } from './page/ciclos-page/ciclos-page.component';
import { PriceComponent } from './components/price/price.component';
import { CiclosRoutingModule } from './ciclos-routing.module';

@NgModule({
  declarations: [CiclosPageComponent],
  imports: [CommonModule, CiclosRoutingModule, PriceComponent],
})
export class CiclosModule {}
