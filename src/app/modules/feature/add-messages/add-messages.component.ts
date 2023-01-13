import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { select, Store } from '@ngrx/store';
import * as action from '../../../store/user-messages/user-messages.action';
import { Message } from 'src/app/models/message';
import { Observable, Subject, takeUntil } from 'rxjs';
import { getLoaded } from 'src/app/store/user-messages/user-messages.selector';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css'],
})
export class AddMessagesComponent {
  private ngUnsubscribe = new Subject();
  private messageEntity$: Observable<boolean>;
  public messageObj: Message = {
    id: '',
    name: '',
    message: '',
    date: '',
  };
  public messageForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<AddMessagesComponent>,
    private store: Store
  ) {
    this.messageEntity$ = this.store.pipe(select(getLoaded));
  }

  // save new message
  public onSubmit(formValue: any) {
    this.spinner.show();
    this.messageObj.id = '';
    this.messageObj.message = formValue.message;
    this.messageObj.name = formValue.name;
    this.messageObj.date = moment(new Date()).format('YYYY-MM-DDThh:mm:ss');

    // Dispatch action to add message
    this.store.dispatch(action.AddMessage({ payload: this.messageObj }));

    // action after data being loaded
    this.messageEntity$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        if (data === true) {
          this.dialogRef.close();
          this.spinner.hide();
        }
      });
  }
}
