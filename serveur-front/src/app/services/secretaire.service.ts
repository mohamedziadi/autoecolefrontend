import { Injectable } from '@angular/core';
import {Secretaire} from '../model/secretaire';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {

  private url = 'http://localhost:8989/secretaire';
  public secretaire: Secretaire = new Secretaire();
  constructor(private httpClient: HttpClient) { }

  public getAll(idAuto: number): Observable<Secretaire[]> {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));*/
    return this.httpClient.get<Secretaire[]>(this.url + '/' + idAuto);
  }

  public save(secretaire: Secretaire): Observable<any> {
    return this.httpClient.post<any>(this.url, secretaire);
  }
  public update(secretaire: Secretaire): Observable<any> {
    return this.httpClient.put<any>(this.url, secretaire);

  }
  public delete(cin: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + cin);
  }
}
