import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interface/response';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public END_POINT_GIPHY: String = environment.END_POINT;
  private API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getListStickers(search: string): Observable<any> {
    let params = new HttpParams().set('api_key', this.API_KEY);
    params = params.append('q', search);
    params = params.append('limit', 6);
    params = params.append('offset', 5);
    params = params.append('rating', 'g');
    params = params.append('lang', 'en');
    params = params.append('bundle', 'clips_grid_picker');
    return this.http.get<Response>(this.END_POINT_GIPHY + '/search', { params }).pipe(
      map(
        response => response
      )
    );
  }
}
