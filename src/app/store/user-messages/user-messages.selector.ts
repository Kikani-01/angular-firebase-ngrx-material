import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUser from './user-messages.reducer';

export const selectState =
  createFeatureSelector<fromUser.UserMessageState>('message');

export const getErrors = createSelector(selectState, (state) => state.error);

export const selectAllMessages = createSelector(
  selectState,
  fromUser.selectAllMessages
);

export const getLoading = createSelector(selectState, (state) => state.loading);

export const getLoaded = createSelector(selectState, (state) => state.loaded);
