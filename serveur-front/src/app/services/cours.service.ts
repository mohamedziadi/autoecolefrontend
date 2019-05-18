import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cours} from '../model/cours';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private url = 'http://localhost:8989/cours';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Cours[]> {
    return this.httpClient.get<Cours[]>(this.url + '/list');
  }

  public delete(idCrs: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + idCrs);
  }

  public save(cours: Cours) {
    return this.httpClient.post(this.url, cours);
  }
  public update(cours: Cours,iCrs:any) {
    return this.httpClient.put(this.url +'/'+ iCrs , cours);
  }
}
