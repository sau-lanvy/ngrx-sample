import { Film } from '../../models/film';
import * as SearchActions from '../actions/search.action';

export interface State {
  results: Film[];
  query: string;
  error: string;
}

const initialState: State = {
  results: [],
  query: '',
  error: ''
};

export function reducer(state = initialState, action: SearchActions.Actions): State {
  switch (action.type) {
    case SearchActions.SEARCH: {
      const query = action.payload;
      if (query === '') {
        return {
          results: [],
          error: '',
          query,
        };
      }

      return {
        ...state,
        query,
        error: '',
      };
    }

    case SearchActions.SEARCH_COMPLETE: {
      return {
        results: action.payload,
        error: '',
        query: state.query,
      };
    }

    case SearchActions.SEARCH_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getResults = (state: State) => state.results;

export const getQuery = (state: State) => state.query;

export const getError = (state: State) => state.error;
