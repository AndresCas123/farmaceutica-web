import {Injectable} from '@angular/core';
import {Client} from '../model/Client';

@Injectable()
export class SharedDataService {

  private currentUser: Client = new Client('','','','');

  constructor() {
  }

  setCurrentUser(user: Client): void {
    this.currentUser = user;
  }

  getCurrentUser(): Client {
    return this.currentUser;
  }

}
