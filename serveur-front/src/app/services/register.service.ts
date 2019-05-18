import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Candidat} from '../model/candidat';
import {Moniteur} from '../model/moniteur';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http://localhost:8989/register';

  constructor(private httpClient: HttpClient) {
  }

  public  register(candidat: Candidat): Observable<any> {
    return this.httpClient.post(this.url, candidat);
  }

  public  registerAutoEcole(moniteur: Moniteur): Observable<any> {
    return this.httpClient.post(this.url + '/autoEcole', moniteur);
  }
}
