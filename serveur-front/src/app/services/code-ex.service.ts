import { Injectable } from '@angular/core';
import {CodeEx} from "../model/code-ex";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CodeExService {

  private url = 'http://localhost:8989/code';
  public codeEx: CodeEx = new CodeEx();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<CodeEx[]> {
    return this.httpClient.get<CodeEx[]>(this.url);
  }


  public getByAutoEcole(id): Observable<CodeEx[]> {
    return this.httpClient.get<CodeEx[]>(this.url+'/'+id );
  }
  public getByCandidat(cin): Observable<CodeEx[]> {
    return this.httpClient.get<CodeEx[]>(this.url+'/candidat/'+cin );
  }

  public getByEtat(etat): Observable<CodeEx[]> {
    return this.httpClient.get<CodeEx[]>(this.url+'/etat/'+etat );
  }
  public save(codeEx: CodeEx) {
    return this.httpClient.post(this.url, codeEx);
  }
  public update(codeEx: CodeEx): Observable<any> {
    return this.httpClient.put<any>(this.url, codeEx);

  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }


}
