import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexApi {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.spacexdata.com/v4';

  getUpcomingLaunches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/launches/upcoming`);
  }

  getPastLaunches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/launches/past`);
  }
}
