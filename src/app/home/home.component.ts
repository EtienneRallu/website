import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Output() title: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log('test');
    this.title.emit('');
  }

}
