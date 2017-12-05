import { Action } from '@ngrx/store';
import { Film } from '../../models/film';

// Create the actions type
export const SEARCH = '[Film] Search';
export const SEARCH_COMPLETE = '[Film] Search Complete';
export const SEARCH_ERROR = '[Film] Search Error';

/**
 * Create the actions implementing Action interface from ngrx/store
 * Every action is conprised  of at least a type and an optional payload.
 * If you're familiar with Redux you can use plain Javascript object when you're
 * defining actions, so we're using classes because we can take advantage of typescript
 * powerful type checking also give you hell when you're dispatching these actions to
 * make sure that you're entering the right data for the payload.
 */
export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Film[]) {}
}

export class SearchError implements Action {
  readonly type = SEARCH_ERROR;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = Search | SearchComplete | SearchError;
