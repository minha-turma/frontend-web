import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message';
import { SchoolClass } from '../classes/school-class';
import { SchoolClassService } from '../classes/schoolClass.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  schoolClasses: SchoolClass[];

  subject: String;
  content: String;
  schoolClass: SchoolClass;

  constructor(public messageService: MessageService,
              public schoolClassService: SchoolClassService) { }

  ngOnInit() {
    this.messageService.list().subscribe(messages => {
      this.messages = messages;
    });
    this.schoolClassService.list().subscribe(schoolClasses => {
      this.schoolClasses = schoolClasses;
    });
  }

  addMessage() {
    this.messageService.add(new Message({
      subject: this.subject,
      content: this.content,
      schoolClass: this.schoolClass })).subscribe(message => {
      this.messages.push(message);
    });
  }

}
