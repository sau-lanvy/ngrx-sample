import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Film } from '../models/film';
import { FilmsService } from '../services/films.service';

import { Store } from '@ngrx/store';
import * as SearchActions from '../store/actions/search.action';
import * as fromRoot from '../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-films',
  template: `<app-search-input [query]="searchQuery$ | async" (search)="onSearch($event)"></app-search-input>
             <app-search-results [films] = "films$ | async"></app-search-results>
            `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
  searchQuery$: Observable<string>;
  films$: Observable<Film[]>;

  constructor(private filmService: FilmsService, private store: Store<fromRoot.AppState>) {
    this.searchQuery$ = this.store.select(fromRoot.getSearchQuery);
    this.films$ = this.store.select(fromRoot.getSearchFilms);
  }

  ngOnInit() {
  }

  onSearch(terms: string) {

    this.store.dispatch(new SearchActions.Search(terms));
  }

}
