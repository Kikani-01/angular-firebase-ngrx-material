import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/_services/message.service';

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
  };
  constructor(private formBuilder: FormBuilder, private ms: MessageService) {}
  public messageForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  onSubmit(formValue: any) {
    this.messageObj.id = '';
    this.messageObj.message = formValue.message;
    this.messageObj.name = formValue.name;
    console.log('form :>> ', formValue);

    this.ms.addMessage(this.messageObj).then((res) => {
      if (res) console.log('messaged added! :>> ');
    });
  }
}
