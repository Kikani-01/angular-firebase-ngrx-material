import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message } from 'src/app/models/message';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddMessagesComponent } from '../add-messages/add-messages.component';
import * as actions from '../../../store/user-messages/user-messages.action';
import {
  getLoaded,
  selectAllMessages,
} from 'src/app/store/user-messages/user-messages.selector';
import { Observable, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  private messageEntities$: Observable<boolean>;
  private ngUnsubscribe = new Subject();
  public messages!: Message[];
  public displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private spinner: NgxSpinnerService
  ) {
    const messages$ = this.store.pipe(select(selectAllMessages));
    messages$.subscribe((messages) => (this.messages = messages));
    this.messageEntities$ = this.store.pipe(select(getLoaded));
  }

  ngOnInit() {
    //load messages from database
    this.getMessages();
  }

  /**
   * limit validation to show messages
   */
  public limitStrLength = (text: string, max_length: number) => {
    if (text.length > max_length - 3) {
      return text.substring(0, max_length).trimEnd() + '...';
    } else {
      return text;
    }
  };

  // add new message dialog box
  public openDialogMessage() {
    this.dialog.open(AddMessagesComponent, {
      width: '350px',
    });
  }

  // fetch messages
  private getMessages(): void {
    // show loading spinner
    this.spinner.show();

    // Dispatch action to add message
    this.store.dispatch(actions.getMessages());

    // // action after data being loaded
    this.messageEntities$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => {
        if (data === true) {
          // hide loading spinner
          this.spinner.hide();
        }
      });
  }
}
