import { Injectable } from '@angular/core';
import {ConduiteEx} from "../model/conduite-ex";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConduiteExService {
  private url = 'http://localhost:8989/conduite';
  public conduiteEx: ConduiteEx = new ConduiteEx();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<ConduiteEx[]> {
    return this.httpClient.get<ConduiteEx[]>(this.url);
  }

  public getByAutoEcole(id): Observable<ConduiteEx[]> {
    return this.httpClient.get<ConduiteEx[]>(this.url+'/'+id );
  }
  public getByCandidat(cin): Observable<ConduiteEx[]> {
    return this.httpClient.get<ConduiteEx[]>(this.url+'/candidat/'+cin );
  }

  public getByEtat(etat): Observable<ConduiteEx[]> {
    return this.httpClient.get<ConduiteEx[]>(this.url+'/etat/'+etat );
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }

  public save(conduiteEx: ConduiteEx) {
    return this.httpClient.post(this.url, conduiteEx);
  }
  public update(conduiteEx: ConduiteEx): Observable<any> {
    return this.httpClient.put<any>(this.url, conduiteEx);

  }
}
