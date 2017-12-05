import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FilmsComponent } from './containers/films.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilmsService } from './services/films.service';
import { FilmsEffects } from './store/effects/films.effect';


import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: FilmsComponent},
    ]),
    StoreModule.forFeature('films', reducers),
    EffectsModule.forFeature([FilmsEffects]),
  ],
  providers: [FilmsService],
  declarations: [FilmsComponent, SearchInputComponent, SearchResultsComponent]
})
export class FilmsModule { }
