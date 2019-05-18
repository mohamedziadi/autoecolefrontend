import { Injectable } from '@angular/core';
import {Candidat} from '../model/candidat';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private url = 'http://localhost:8989/candidat';
  public candidat: Candidat = new Candidat();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Candidat[]> {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));*/
    return this.httpClient.get<Candidat[]>(this.url);
  }

  public save(candidat: Candidat): Observable<any> {
    return this.httpClient.post<any>(this.url, candidat);
  }

  public update(candidat: Candidat): Observable<any> {
    return this.httpClient.put<any>(this.url, candidat);

  }

  public delete(cin: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + cin);
  }
}
