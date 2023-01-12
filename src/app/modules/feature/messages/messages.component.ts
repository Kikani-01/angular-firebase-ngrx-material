import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/_services/message.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddMessagesComponent } from '../add-messages/add-messages.component';
import { select, Store } from '@ngrx/store';
import * as usreActions from '../../../store/user-messages/user-messages.action';
import { Message } from 'src/app/models/message';
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
  displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  constructor(
    public dialog: MatDialog,
    private ms: MessageService,
    private spinner: NgxSpinnerService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    //load messages from database
    this.getMessages();
  }

  limitStrLength = (text: string, max_length: number) => {
    if (text.length > max_length - 3) {
      return text.substring(0, max_length).trimEnd() + '...';
    } else {
      return text;
    }
  };

  openDialogMessage() {
    this.dialog.open(AddMessagesComponent, {
      width: '350px',
    });
  }

  getMessages() {
    // this.spinner.show();
    this.store.dispatch(usreActions.getUser());
    // this.ms.getMessages().subscribe((res) => {
    //   console.log('res :>> ', res);
    //   this.spinner.hide();
    //   this.messages = res;
    // });
  }
}
