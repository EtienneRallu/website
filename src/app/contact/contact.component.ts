import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model: Message = new Message();
  submitted = false;
  @Output() title: EventEmitter<string> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.title.emit('Contact');
  }

  onSubmit() {
   this.messageService.sendMessage(this.model).subscribe(message => { this.submitted = true; });
  }
}
