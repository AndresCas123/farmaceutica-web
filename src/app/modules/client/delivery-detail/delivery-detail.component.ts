import {Component, OnInit} from '@angular/core';
import {Client} from '../../../model/Client';
import {SharedDataService} from '../../../service/shared.data.service';
import {DeliveryService} from '../../../service/delivery.service';
import {CreateDeliveryResponse} from '../../../service/response/CreateDeliveryResponse';
import Swal from 'sweetalert2';
import {Offer} from '../../../service/response/Offer';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.css']
})
export class DeliveryDetailComponent implements OnInit {

  public deliveries: CreateDeliveryResponse[] = [];
  private user: Client = new Client('', '', '', '');

  constructor(public sharedDataService: SharedDataService, public deliveryService: DeliveryService) {
    this.user = sharedDataService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.deliveryService.retrieveDeliveries(this.user.sub)
      .subscribe(value => {
        this.deliveries = value;
        this.deliveries.forEach(delivery => {
          console.log('calling to details offers');
          this.deliveryService.retrieveOffersByDelivery(delivery.id)
            .subscribe(offers => delivery.offers = offers);
        });
      });
  }

  sendOffer(deliveryId: string, offerId: string): void {
    this.deliveryService.sendOfferWinner(deliveryId, offerId)
      .subscribe(value => {
        this.successfulMessage();
        this.loadDeliveries();
      });
  }

  successfulMessage(): void {
    Swal.fire('Despacho creado exitosamente');
  }

  areDeliveriesEmpty(offers: Offer[]): boolean {
    if (offers === undefined) {
      return true;
    }
    return offers.length === 0;
  }
}
