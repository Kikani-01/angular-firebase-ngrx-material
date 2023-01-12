import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUser from './user-messages.reducer';

export const selectUserState =
  createFeatureSelector<fromUser.UserState>('user');

export const getErrors = createSelector(
  selectUserState,
  (state) => state.error
);

export const getLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const getLoaded = createSelector(
  selectUserState,
  (state) => state.loaded
);
