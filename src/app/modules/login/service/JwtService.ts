import jwt_decode from 'jwt-decode';
import {Injectable, NgModule} from '@angular/core';
import {Client} from '../../../model/Client';

@Injectable()
@NgModule()
export class JwtService {

  constructor() {
  }

  decode(token: string): Client {
    return jwt_decode(token);
  }

}
