import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Moniteur} from '../model/moniteur';

@Injectable({
  providedIn: 'root'
})
export class MoniteurService {
  private url = 'http://localhost:8989/moniteur';
  constructor(private httpClient: HttpClient) { }

  public getAll(idAuto: number): Observable<Moniteur[]> {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));*/
    return this.httpClient.get<Moniteur[]>(this.url + '/' + idAuto);
  }

  public save(moniteur: Moniteur): Observable<any> {
    return this.httpClient.post<any>(this.url, moniteur);
  }
  public update(moniteur: Moniteur): Observable<any> {
    return this.httpClient.put<any>(this.url, moniteur);

  }
  public delete(cin: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + cin);
  }

}
