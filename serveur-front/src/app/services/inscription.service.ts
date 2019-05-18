import { Injectable } from '@angular/core';
import {Inscription} from '../model/inscription';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private url = 'http://localhost:8989/inscription';
  public inscription: Inscription = new Inscription();

  constructor(private httpClient: HttpClient) {
  }

 public getAll(idAuto): Observable<Inscription[]> {

   return this.httpClient.get<Inscription[]>(this.url + '/' + idAuto);
 }

  public getInscriptionConfirmed(idAuto): Observable<Inscription[]> {

    return this.httpClient.get<Inscription[]>(this.url + '/inscrit/' + idAuto);
  }

  public save(inscription: Inscription): Observable<any> {
    return this.httpClient.post<any>(this.url, inscription);
  }

  public update(inscription: Inscription): Observable<any> {
    return this.httpClient.put<any>(this.url, inscription);

  }

  public delete(id): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }
}
