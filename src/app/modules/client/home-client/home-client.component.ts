import {Component, OnInit} from '@angular/core';
import {JwtService} from '../../login/service/JwtService';
import {SharedDataService} from '../../../service/shared.data.service';
import {Client} from '../../../model/Client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {

  isShown = true ;
  public user: Client = new Client('', '', '', '');

  constructor(public sharedDataService: SharedDataService, public router: Router) {
    this.user = sharedDataService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  closeSession(): void {
    this.sharedDataService.setCurrentUser(new Client('', '', '', ''));
    this.router.navigate(['']);
  }

  hideWelcomeMessage(): void {
    this.isShown = false;
  }

}
