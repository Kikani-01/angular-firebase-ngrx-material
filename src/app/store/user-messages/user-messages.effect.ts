import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import * as userActions from './user-messages.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/_services/message.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private ms: MessageService) {}

  getUsers$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.GET_USER),
        mergeMap(
          (res) =>
            this.ms
              .getMessages()
              .pipe(tap((res) => console.log('Data loaded', res))),
          map(
            (res: any) => userActions.getUserSuccess(res),
            catchError((err) => of(userActions.getUserFail(err.error)))
          )
        )
      ),
    { dispatch: false }
  );

  addUser = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userActions.ADD_USER),
        mergeMap((action: any) =>
          this.ms.addMessage(action.payload).pipe(
            tap((res) => console.log(res)),
            map((res: any) => userActions.AddUserSuccess(res)),
            catchError((err) => of(userActions.AddUserFail(err.error)))
          )
        )
      ),
    { dispatch: false }
  );
}
