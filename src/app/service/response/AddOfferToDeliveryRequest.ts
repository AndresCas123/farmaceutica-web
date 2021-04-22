export class AddOfferToDeliveryRequest {

  constructor(
    public price: number,
    public supplier: string,
    public supplierName: string
  ) {
  }

}
