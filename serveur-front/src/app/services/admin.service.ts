import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../model/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:8989/admin';
  public admin: Admin = new Admin();
  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Admin[]> {
    /*let headers = new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));*/
    return this.httpClient.get<Admin[]>(this.url);
  }

  public save(admin: Admin): Observable<any> {
    return this.httpClient.post<any>(this.url, admin);
  }
  public update(admin: Admin): Observable<any> {
    return this.httpClient.put<any>(this.url, admin);

  }
  public delete(cin: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + '/' + cin);
  }

}
