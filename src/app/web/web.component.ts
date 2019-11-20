import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  @Output() title: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.title.emit('Web, It & Communication');
  }

}
