import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'src/app/_services/message.service';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as userAction from '../../../store/user-messages/user-messages.action';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css'],
})
export class AddMessagesComponent {
  messageObj: Message = {
    id: '',
    name: '',
    message: '',
    date: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private ms: MessageService,
    private matSnackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddMessagesComponent>,
    private store: Store
  ) {}
  public messageForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  onSubmit(formValue: any) {
    this.messageObj.id = '';
    this.messageObj.message = formValue.message;
    this.messageObj.name = formValue.name;
    this.messageObj.date = moment(new Date()).format('YYYY-MM-DDThh:mm:ss');
    console.log('form :>> ', formValue);
    this.dialogRef.close();
    this.store.dispatch(userAction.AddUser({ payload: this.messageObj }));

    // this.ms.addMessage(this.messageObj).then((res) => {
    //   if (res)
    //     this.matSnackBar.open(` ${formValue.name} added new message!`, '', {
    //       duration: 5000,
    //     });
    // });
  }
}
