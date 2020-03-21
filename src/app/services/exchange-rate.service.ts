import { ExchangeRate } from './../models/ExchangeRate';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private http: HttpClient) { }

  public getRate(from: string, to: string): Observable<ExchangeRate> {
    let parameters: HttpParams = new HttpParams();
    parameters = parameters.append('base', from).append('symbols', to);
    return this.http.get<ExchangeRate>("https://api.exchangeratesapi.io" + '/latest', { params: parameters });
  }
}
