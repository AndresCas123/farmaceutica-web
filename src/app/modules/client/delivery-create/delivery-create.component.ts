import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../service/shared.data.service';
import {Client} from '../../../model/Client';
import {DeliveryService} from '../../../service/delivery.service';
import {CreateDeliveryRequest} from '../../../service/response/CreateDeliveryRequest';
import Swal from 'sweetalert2';
import {SupplierService} from '../../../service/supplier.service';
import {City} from '../../../model/City';

@Component({
  selector: 'app-delivery-create',
  templateUrl: './delivery-create.component.html',
  styleUrls: ['./delivery-create.component.css']
})
export class DeliveryCreateComponent implements OnInit {

  public source = '';
  public destination = '';
  public volume = 0;
  public weight = 0;
  public description = '';
  public cities: City[] = [];
  private user: Client = new Client('', '', '', '');

  constructor(public sharedDataService: SharedDataService, public deliveryService: DeliveryService, public supplierService: SupplierService)
  {
    this.user = sharedDataService.getCurrentUser();
    this.supplierService.retrieveCities()
      .subscribe(
        value => this.cities = value
      );
  }

  ngOnInit(): void {
  }

  createDelivery(): void {
    const sourceCode = this.source.split('-')[0];
    const sourceName = this.source.split('-')[1];
    const destinationCode = this.destination.split('-')[0];
    const destinationName = this.destination.split('-')[1];
    const request = new CreateDeliveryRequest(this.user.sub, sourceCode, sourceName, destinationCode, destinationName, this.description
      , this.weight, this.volume);
    this.deliveryService.createDelivery(request)
      .subscribe(value => {
        this.source = '';
        this.destination = '';
        this.volume = 0;
        this.weight = 0;
        this.description = '';
        this.successfulMessage();
      });
  }

  successfulMessage(): void {
    Swal.fire('Despacho creado exitosamente');
  }

}
