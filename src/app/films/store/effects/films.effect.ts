import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as SearchActions from '../actions/search.action';
import { Film } from '../../models/film';
import { FilmsService } from '../../services/films.service';

@Injectable()
export class FilmsEffects {
  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType<SearchActions.Search>(SearchActions.SEARCH)
    .debounceTime(300)
    .map(action => action.payload)
    .switchMap(query => {
        if (query === '') {
          return empty();
        }

        return this.filmsService
          .searchFilms(query)
          .map((films: Film[]) => new SearchActions.SearchComplete(films))
          .catch(error => of(new SearchActions.SearchError(error)));
    });

  constructor(
    private actions$: Actions,
    private filmsService: FilmsService
  ) {}
}
