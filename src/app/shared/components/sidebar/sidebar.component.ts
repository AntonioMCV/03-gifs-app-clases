import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: `
    #sidebar {
      height: 100vh;
      width: 250px;
    }
  `,
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(newTag: string) {
    this.gifsService.searchTag(newTag);
  }
}
