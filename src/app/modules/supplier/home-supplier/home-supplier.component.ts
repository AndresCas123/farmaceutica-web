import { Component, OnInit } from '@angular/core';
import {Client} from '../../../model/Client';
import {SharedDataService} from '../../../service/shared.data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-supplier',
  templateUrl: './home-supplier.component.html',
  styleUrls: ['./home-supplier.component.css']
})
export class HomeSupplierComponent implements OnInit {

  isShown = true ;
  public user: Client = new Client('','','','');

  constructor(public sharedDataService: SharedDataService, public router: Router) {
    this.user = sharedDataService.getCurrentUser();
  }

  ngOnInit(): void {
  }

  closeSession(): void{
    this.sharedDataService.setCurrentUser(new Client('','','',''));
    this.router.navigate(['']);
  }

  hideWelcomeMessage(): void {
    this.isShown = false;
  }

}
