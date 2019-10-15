import { Component, OnInit} from '@angular/core';
import { Message }    from '../message';
import { MessageService } from '../message.service';
import { analyzeFileForInjectables } from '@angular/compiler';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  model: Message = new Message(); 
  submitted = false;
  
  constructor(private messageService:MessageService) { }

  onSubmit() {

   this.messageService.sendMessage(this.model).subscribe(message =>{ this.submitted = true})
  }

  ngOnInit() {}

}
