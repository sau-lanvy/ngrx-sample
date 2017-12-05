import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Film } from '../models/film';

@Injectable()
export class FilmsService {
  private API_PATH = 'http://www.omdbapi.com/?apikey=da1f4c4d';

  constructor(private http: HttpClient) {}

  searchFilms(queryTitle: string): Observable<Film[]> {
    return this.http.get(`${this.API_PATH}&s=${queryTitle}`)
      .map(res => res['Search'] || []);
  }
}
