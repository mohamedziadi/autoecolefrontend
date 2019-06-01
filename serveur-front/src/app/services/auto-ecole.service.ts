import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AutoEcole} from '../model/auto-ecole';
import {Code} from "../model/code";
import {Gerant} from "../model/gerant";



@Injectable({
  providedIn: 'root'
})
export class AutoEcoleService {
  private url = 'http://localhost:8989/auto';
  public auto: AutoEcole = new AutoEcole();
  public  gerant: Gerant = new Gerant();

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<AutoEcole[]> {
    return this.httpClient.get<AutoEcole[]>(this.url);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + id);
  }
  public update(auto: AutoEcole): Observable<any> {
    return this.httpClient.put<any>(this.url, auto);
  }
  public getByGerant(gerant): Observable<Gerant[]> {
    return this.httpClient.get<Gerant[]>(this.url+'/gerant/'+gerant );
  }
}

