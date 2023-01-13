import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { messageReducer } from './store/user-messages/user-messages.reducer';

export const reducers: ActionReducerMap<AppState> = {
  message: messageReducer,
};
