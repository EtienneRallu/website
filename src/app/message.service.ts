import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from './message';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messageUrl = 'https://etiennerallu.com/websiteBack/public/message';

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<any> {
    return this.http.post(this.messageUrl, message, httpOptions);
  }
}
