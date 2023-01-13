import { UserMessageState } from './store/user-messages/user-messages.reducer';

export interface AppState {
  readonly message: UserMessageState;
}
