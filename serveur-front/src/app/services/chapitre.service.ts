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
  public save(chapitreAndCoursId:any) {
    return this.httpClient.post(this.url, chapitreAndCoursId);
  }
  public update(chapitre: Chapitre,idChap:any): Observable<any> {
    return this.httpClient.put<any>(this.url + '/' + idChap, chapitre);

  }
  public delete(idChap: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + idChap);
  }
}
