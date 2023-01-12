import { Injectable } from '@angular/core';
import { Action, createAction, props } from '@ngrx/store';
import { Message } from './user-messages.model';

export const GET_USER = '[User] User';
export const GET_USER_SUCCESS = '[User] User Success';
export const GET_USER_FAIL = '[User] User Fail';
export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';
export const ADD_USER_FAIL = '[User] Add User Fail';

export const getUser = createAction(GET_USER);

export const getUserSuccess = createAction(
  GET_USER_SUCCESS,
  props<{ payload: Message[] }>()
);

export const getUserFail = createAction(
  GET_USER_FAIL,
  props<{ payload: string }>()
);

export const AddUser = createAction(ADD_USER, props<{ payload: any }>());

export const AddUserSuccess = createAction(
  ADD_USER_SUCCESS,
  props<{ payload: any }>()
);

export const AddUserFail = createAction(
  ADD_USER_FAIL,
  props<{ payload: any }>()
);
