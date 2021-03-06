import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  @Output() title: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.title.emit('Music');
  }

}
