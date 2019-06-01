import { Injectable } from '@angular/core';
import {config, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users';
import {Admin} from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8989/user';

  constructor(private httpClient: HttpClient) {
  }
  public changePassword(pwd): Observable <any> {
    return this.httpClient.put(this.url , pwd);
  }
}
