import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Seance} from '../model/seance';




@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private url = 'http://localhost:8989/seance';
  public seance: Seance = new Seance();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Seance[]> {
    return this.httpClient.get<Seance[]>(this.url);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  public save(seance: Seance) {
    return this.httpClient.post(this.url, seance);
  }
  public update(seance: Seance): Observable<any> {
    return this.httpClient.put<any>(this.url, seance);

  }
}
