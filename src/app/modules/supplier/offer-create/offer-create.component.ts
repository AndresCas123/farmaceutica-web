import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../service/shared.data.service';
import {DeliveryService} from '../../../service/delivery.service';
import {Client} from '../../../model/Client';
import {CreateDeliveryResponse} from '../../../service/response/CreateDeliveryResponse';
import Swal from 'sweetalert2';
import {AddOfferToDeliveryRequest} from '../../../service/response/AddOfferToDeliveryRequest';
import {SupplierService} from '../../../service/supplier.service';
import {Supplier} from '../../../model/Supplier';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  public deliveries: CreateDeliveryResponse[] = [];
  private user: Client = new Client('', '', '', '');
  private supplier: Supplier = new Supplier('', '', '', '');

  constructor(public sharedDataService: SharedDataService, public deliveryService: DeliveryService, public supplierService: SupplierService) {
    this.user = sharedDataService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadDeliveries();
    this.supplierService.retrieveSupplierById(this.user.externalId)
      .subscribe(value => {
        this.supplier = value;
      });
  }

  loadDeliveries(): void {
    this.deliveryService.retrieveDeliveries(this.user.sub)
      .subscribe(value => this.deliveries = value);
  }

  createOffer(deliveryId: string): void {
    const amountString = (document.getElementById('offer' + deliveryId) as HTMLInputElement).value;
    const amount = Number(amountString);
    const request = new AddOfferToDeliveryRequest(amount, this.supplier.id, this.supplier.name);
    this.deliveryService.addOfferToDelivery(deliveryId, request)
      .subscribe(value => {
        this.successfulMessage();
        (document.getElementById('offer' + deliveryId) as HTMLInputElement).value = '';
      });
  }

  successfulMessage(): void {
    Swal.fire('Oferta enviada exitosamente');
  }

}
