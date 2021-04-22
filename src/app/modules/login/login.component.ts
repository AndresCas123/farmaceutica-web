import {Component, Inject, OnInit} from '@angular/core';
import {UserLogin} from '../../model/UserLogin';
import {Router} from '@angular/router';
import {PharmaceuticalServiceLogin} from './service/pharmaceutical.service.login';
import {JwtService} from './service/JwtService';
import {Client} from '../../model/Client';
import {SharedDataService} from '../../service/shared.data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin = new UserLogin('', '');
  client = new Client('', '', '', '');

  constructor(public router: Router,
              public pharmaceuticalService: PharmaceuticalServiceLogin,
              public jwtService: JwtService,
              public sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.pharmaceuticalService.doLogin(this.userLogin).subscribe(
      response => {
        this.client = this.jwtService.decode(response.token);
        this.sharedDataService.setCurrentUser(this.client);
        if (this.client.role === 'client') {
          this.router.navigate(['/home-client']);
        } else {
          this.router.navigate(['/home-supplier']);
        }
      }
    );
  }

}
