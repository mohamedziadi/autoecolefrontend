import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chapitre} from '../model/chapitre';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {
  private url = 'http://localhost:8989/chapitre';
  public chapitre: Chapitre = new Chapitre();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Chapitre[]> {
    return this.httpClient.get<Chapitre[]>(this.url);
  }
  public save(chapitre: Chapitre) {
    return this.httpClient.post(this.url, chapitre);
  }
  public update(chapitre: Chapitre): Observable<any> {
    return this.httpClient.put<any>(this.url, chapitre);

  }
  public delete(idChap: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + idChap);
  }
}
