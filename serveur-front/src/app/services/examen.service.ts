import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Examen} from '../model/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private url = 'http://localhost:8989/examen';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Examen[]> {
    return this.httpClient.get<Examen[]>(this.url);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  public save(examen: Examen) {
    return this.httpClient.post(this.url, examen);
  }
}
