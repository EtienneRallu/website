import { Component, OnInit } from '@angular/core';
import { Message }    from '../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model = new Message();

  submitted = false;

  onSubmit() { this.submitted = true; }


  constructor() { }

  ngOnInit() {
  }

}
