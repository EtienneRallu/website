import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() title: EventEmitter<string> = new EventEmitter();

  isToggled:boolean =false;
  constructor() { }

  toggleNavBar()
  {
    this.isToggled = !this.isToggled;
  }
  resetTitle() {
    this.title.emit('reset');
  }
}
