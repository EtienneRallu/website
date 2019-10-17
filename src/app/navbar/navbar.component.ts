import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() scroll: EventEmitter<any> = new EventEmitter();

  isToggled:boolean =false;
  constructor() { }

  toggleNavBar()
  {
    this.isToggled = !this.isToggled;
  }
  setClasses() {
    let classes = {
      'show': this.isToggled
    }
    return classes;
  }

  scrollToMain() {
    this.scroll.emit(true);
  }
}
