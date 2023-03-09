import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPerson } from '../data/composer';
import { ITrack } from '../data/track';

const API_URL = 'https://craze.se/api/v2/';
const PERSONS = ['Kalle', 'Anna', 'John'];

@Injectable({
  providedIn: 'root',
})
export class PersonApiService {
  constructor(private httpClient: HttpClient) {}

  getPersonsMock(): Observable<string[]> {
    return of(PERSONS);
  }

  getPersons(): Observable<IPerson[]> {
    return this.httpClient.get<IPerson[]>(API_URL + 'composers.php');
  }

  getTrack(id: number): Observable<ITrack | undefined> {
    return this.httpClient.get<ITrack>(API_URL + `track.php?id=${id}`);
  }

  getAllTracks(): Observable<ITrack[]> {
    return this.httpClient.get<ITrack[]>(API_URL + `tracks.php?cat=1`);
  }
}
