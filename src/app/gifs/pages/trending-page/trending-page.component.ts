import { Component, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-trending-page',
  templateUrl: './trending-page.component.html',
  styles: ``,
})
export class TrendingPageComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifTrendingList;
  }

  ngOnInit(): void {
    this.gifsService.getTrendingGifs();
  }
}
