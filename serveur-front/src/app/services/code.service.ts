import { Injectable } from '@angular/core';
import {Code} from '../model/code';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Seance} from '../model/seance';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private url = 'http://localhost:8989/code';
  public code: Code = new Code();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Code[]> {
    return this.httpClient.get<Code[]>(this.url);
  }


  public getByAutoEcole(id): Observable<Code[]> {
    return this.httpClient.get<Code[]>(this.url+'/'+id );
  }
  public getByCandidat(cin): Observable<Code[]> {
    return this.httpClient.get<Code[]>(this.url+'/candidat/'+cin );
  }

  public getByEtat(etat): Observable<Code[]> {
    return this.httpClient.get<Code[]>(this.url+'/etat/'+etat );
  }
  public save(code: Code) {
    return this.httpClient.post(this.url, code);
  }
  public update(code: Code): Observable<any> {
    return this.httpClient.put<any>(this.url, code);

  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }


}
