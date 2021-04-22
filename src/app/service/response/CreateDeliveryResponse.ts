import {Offer} from './Offer';

export class CreateDeliveryResponse {

  constructor(
    public id: string,
    public createdAt: string,
    public state: string,
    public source: string,
    public sourceName: string,
    public destination: string,
    public destinationName: string,
    public description: string,
    public weight: number,
    public volume: number,
    public client: string,
    public offers: Offer[]
  ) {}

}
