import { Component, Inject, ComponentRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { slideInAnimation } from './route-animation';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT)
    private document: any,
              public router: Router,
              private titleService: Title) { }

  title = 'Etienne Rallu - Sound and Media Engineer';

  onActivate(componentReference) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#main',
    });
    componentReference.title.subscribe((data) => {
      this.setTitle(this.title + ' - ' + data);
   });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public resetTitle() {
    this.setTitle(this.title);
  }
}
