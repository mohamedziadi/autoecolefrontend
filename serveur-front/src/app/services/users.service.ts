import { Injectable } from '@angular/core';
import {config, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users';
import {Admin} from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8989/admin';

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Users[]> {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));*/
    return this.httpClient.get<Admin[]>(this.url);
  }

  public save(user: Users): Observable<any> {
    return this.httpClient.post<any>(this.url, user);
  }

  public update(user: Users): Observable<any> {
    return this.httpClient.put<any>(this.url, user);

  }

  public delete(cin: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + cin);
  }
}

