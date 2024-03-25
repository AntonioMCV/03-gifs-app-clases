import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'ciclos-price',
  templateUrl: './price.component.html',
  styles: '',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;
  public interval?: Subscription;

  ngOnInit(): void {
    console.log('Hijo: ngOnInit');
    /*     this.interval = interval(1000).subscribe((value) =>
      console.log(`Seconds: ${value}`)
    ); */
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hijo: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Hijo: ngOnDestroy');
    /*     this.interval?.unsubscribe(); */
  }
}
