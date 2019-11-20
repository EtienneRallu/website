import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.title.emit('Biography');
  }

}
