import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/_services/message.service';
import { AddMessagesComponent } from '../add-messages/add-messages.component';

export interface DialogData {
  name: string;
  message: string;
}
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages!: Message[];
  displayedColumns: string[] = ['id', 'name', 'message'];
  constructor(public dialog: MatDialog, private ms: MessageService) {}

  ngOnInit() {
    //load messages from database
    this.getMessages();
  }
  openDialogMessage() {
    this.dialog.open(AddMessagesComponent, {
      width: '350px',
    });
  }

  getMessages() {
    this.ms.getMessages().subscribe((res) => {
      console.log('res :>> ', res);
      this.messages = res;
    });
  }
}
