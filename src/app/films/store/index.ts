import * as fromSearch from './reducers/search.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface FilmsState {
  search: fromSearch.State;
}

export interface AppState {
  'films': FilmsState;
}

export const reducers = {
  search : fromSearch.reducer
};

export const getFilmsState = createFeatureSelector<FilmsState>('films');

export const getSearchState = createSelector(
  getFilmsState,
  (state: FilmsState) => state.search
);

export const getSearchFilms = createSelector(
  getSearchState,
  fromSearch.getResults
);

export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);

export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

