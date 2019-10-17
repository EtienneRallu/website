import { Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { slideInAnimation } from './route-animation';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }
  
  title = 'Etienne Rallu';

  onScroll(target) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
    })
  }
}
