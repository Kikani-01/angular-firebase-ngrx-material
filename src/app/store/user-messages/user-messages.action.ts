import { createAction, props } from '@ngrx/store';
import { Message } from './user-messages.model';

export const GET_MESSAGES = '[GET] Get Messages';
export const GET_MESSAGES_SUCCESS = '[GET] Get Messages Success';
export const GET_MESSAGES_FAIL = '[GET] Get Messages Fail';
export const ADD_MESSAGE = '[Message] Add Message';
export const ADD_MESSAGE_SUCCESS = '[Message] Add Message Success';
export const ADD_MESSAGE_FAIL = '[Message] Add Message Fail';

export const getMessages = createAction(GET_MESSAGES);

export const getMessagesSuccess = createAction(
  GET_MESSAGES_SUCCESS,
  props<{ payload: Message[] }>()
);

export const getMessagesFail = createAction(
  GET_MESSAGES_FAIL,
  props<{ payload: string }>()
);

export const AddMessage = createAction(ADD_MESSAGE, props<{ payload: any }>());

export const AddMessageSuccess = createAction(
  ADD_MESSAGE_SUCCESS,
  props<{ payload: any }>()
);

export const AddMessageFail = createAction(
  ADD_MESSAGE_FAIL,
  props<{ payload: any }>()
);
