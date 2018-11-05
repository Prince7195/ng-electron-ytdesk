import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, startWith } from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStats(name: string) {
    const key = 'youtube Data API Key';
    // tslint:disable-next-line:max-line-length
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${name}&key=${key}`;
    return interval(5000).pipe(
      startWith(0),
      switchMap(() => this.http.get(url)),
      map(res => res)
    );
  }
}
