import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserLogin} from '../model/UserLogin';
import {Observable} from 'rxjs';
import {LoginResponse} from '../modules/login/service/LoginResponse';
import {Supplier} from '../model/Supplier';
import {Catalog} from '../model/Catalog';
import {CreateDeliveryResponse} from './response/CreateDeliveryResponse';
import {CreateDeliveryRequest} from './response/CreateDeliveryRequest';
import {Offer} from './response/Offer';
import {AddOfferToDeliveryRequest} from './response/AddOfferToDeliveryRequest';

@Injectable()
export class DeliveryService {

  private server = 'https://lhi89edkb8.execute-api.us-east-1.amazonaws.com';
  private createDeliveryUrl = '/farmaceutica/api/v1/deliveries';
  private offersByDeliveryUrl = '/farmaceutica/api/v1/deliveries/{deliveryId}/quotes';
  private offerWinnerUrl = '/farmaceutica/api/v1/deliveries/{deliveryId}/quotes/{offerId}/winner';

  constructor(private httpClient: HttpClient) {
  }

  public createDelivery(request: CreateDeliveryRequest): Observable<CreateDeliveryResponse> {
    return this.httpClient.post<CreateDeliveryResponse>(this.retrieveCreateDeliveryUrl(), request, {responseType: 'json'});
  }

  public retrieveDeliveries(clientId: string): Observable<CreateDeliveryResponse[]> {
    let url = this.retrieveCreateDeliveryUrl();
    url = url + '?client-id=' + clientId + '&state=quotation';
    return this.httpClient.get<CreateDeliveryResponse[]>(url, {responseType: 'json'});
  }

  public retrieveOffersByDelivery(deliveryId: string): Observable<Offer[]>{
    let url = this.retrieveOffersByDeliveryUrl();
    url = url.replace('{deliveryId}', deliveryId);
    return this.httpClient.get<Offer[]>(url, {responseType: 'json'});
  }

  public sendOfferWinner(deliveryId: string, offerId: string): Observable<VoidFunction> {
    let url = this.retrieveOffersWinnerUrl();
    url = url.replace('{deliveryId}', deliveryId);
    url = url.replace('{offerId}', offerId);
    return this.httpClient.post<VoidFunction>(url, null, {responseType: 'json'});
  }

  public addOfferToDelivery(deliveryId:string, request: AddOfferToDeliveryRequest): Observable<VoidFunction> {
    let url = this.retrieveOffersByDeliveryUrl();
    url = url.replace('{deliveryId}', deliveryId);
    return this.httpClient.post<VoidFunction>(url, request, {responseType: 'json'});
  }

  private retrieveCreateDeliveryUrl(): string {
    return this.server + this.createDeliveryUrl;
  }

  private retrieveOffersByDeliveryUrl(): string {
    return this.server + this.offersByDeliveryUrl;
  }

  private retrieveOffersWinnerUrl(): string {
    return this.server + this.offerWinnerUrl;
  }

}
