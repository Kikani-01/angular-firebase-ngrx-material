import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Message } from '../user-messages/user-messages.model';
import * as userAction from '../user-messages/user-messages.action';

export interface UserState extends EntityState<Message> {
  // additional entity state properties
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: UserState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  error: '',
});

export const userReducer = createReducer(
  initialState,
  on(userAction.getUser, (state: any) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  on(userAction.getUserSuccess, (state, action: any) => {
    return adapter.setAll(action.payload, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(userAction.getUserFail, (state, action: any) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  on(userAction.AddUser, (state, action: any) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  on(userAction.AddUserSuccess, (state, action: any) => {
    return adapter.addOne(action.payload, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  on(userAction.AddUserFail, (state, action: any) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  })
);
