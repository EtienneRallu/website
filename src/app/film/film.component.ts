import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Output() title: EventEmitter<string> = new EventEmitter();
  
  ngOnInit() {
    this.title.emit('Film');
  }
 
}

