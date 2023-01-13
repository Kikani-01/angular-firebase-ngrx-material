import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import * as actions from './user-messages.action';
import { mergeMap, map, catchError, take } from 'rxjs/operators';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Message } from './user-messages.model';
@Injectable()
export class UserMessagesEffects {
  constructor(
    private actions$: Actions,
    private fs: Firestore,
    private store: Store<AppState>,
    private matSnackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) {}

  getMessages$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.GET_MESSAGES),
        mergeMap(async () => {
          let messageRef = collection(this.fs, 'messages');
          collectionData(messageRef, { idField: 'id' }).subscribe((res) => {
            this.store.dispatch(
              actions.getMessagesSuccess({ payload: res as Message[] })
            );
          });
        }, map(catchError((err) => of(actions.getMessagesFail(err.error)))))
      ),
    { dispatch: false }
  );

  addMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.ADD_MESSAGE),
        mergeMap(async (action: any) => {
          const data = addDoc(collection(this.fs, 'messages'), action.payload);
          let id;
          await data.then((response) => {
            id = response.id;
          });
          const getData = await docData(doc(this.fs, `messages/${id}`), {
            idField: 'id',
          });
          getData.pipe(take(1)).subscribe((res) => {
            if (res) {
              const data = res;
              this.store.dispatch(actions.AddMessageSuccess({ payload: data }));
              this.spinner.hide();
              this.matSnackBar.open(` ${res['name']} added new message!`, '', {
                duration: 5000,
              });
            }
          });
          catchError((err) => of(actions.AddMessageFail(err.error)));
        })
      ),
    { dispatch: false }
  );
}
