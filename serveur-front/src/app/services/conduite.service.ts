import { Injectable } from '@angular/core';
import {Conduite} from '../model/conduite';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Seance} from '../model/seance';

@Injectable({
  providedIn: 'root'
})
export class ConduiteService {

  private url = 'http://localhost:8989/conduite';
  public conduite: Conduite = new Conduite();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Conduite[]> {
    return this.httpClient.get<Conduite[]>(this.url);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  public save(conduite: Conduite) {
    return this.httpClient.post(this.url, conduite);
  }
  public update(conduite: Conduite): Observable<any> {
    return this.httpClient.put<any>(this.url, conduite);

  }
}
