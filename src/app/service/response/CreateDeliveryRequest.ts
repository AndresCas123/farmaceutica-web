export class CreateDeliveryRequest {

  constructor(
    public client: string,
    public source: string,
    public sourceName: string,
    public destination: string,
    public destinationName: string,
    public description: string,
    public weight: number,
    public volume: number,
  ) {}

}
