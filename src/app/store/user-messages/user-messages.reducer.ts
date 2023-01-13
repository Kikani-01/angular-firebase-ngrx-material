/* eslint-disable @typescript-eslint/no-explicit-any */
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Message } from '../user-messages/user-messages.model';
import * as action from '../user-messages/user-messages.action';

export interface UserMessageState extends EntityState<Message> {
  // additional entity state properties
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export const initialState: UserMessageState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  error: '',
});

export const messageReducer = createReducer(
  initialState,
  // load messages
  on(action.getMessages, (state: any) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  // load message success
  on(action.getMessagesSuccess, (state, action: any) => {
    return adapter.setAll(action.payload, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  // failed to load messages
  on(action.getMessagesFail, (state, action: any) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }),
  // add new message
  on(action.AddMessage, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),
  // add new message success
  on(action.AddMessageSuccess, (state, action: any) => {
    return adapter.addOne(action.payload, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),
  // add new message fail
  on(action.AddMessageFail, (state, action: any) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  })
);

// get the selectors
const { selectAll } = adapter.getSelectors();

// select the array of messages
export const selectAllMessages = selectAll;
