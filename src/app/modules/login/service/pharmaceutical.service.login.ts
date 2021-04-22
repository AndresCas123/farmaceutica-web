import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginResponse} from './LoginResponse';
import {UserLogin} from '../../../model/UserLogin';


@Injectable()
export class PharmaceuticalServiceLogin {

  server = 'https://lhi89edkb8.execute-api.us-east-1.amazonaws.com';
  loginUrl = '/farmaceutica/api/v1/authentication';

  constructor(private httpClient: HttpClient) {
  }

  doLogin(userLogin: UserLogin): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.retrieveLoginUrl(), userLogin, {responseType: 'json'});
  }

  retrieveLoginUrl(): string{
    return this.server + this.loginUrl;
  }
}
