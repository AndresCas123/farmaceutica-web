import {City} from './City';

export class Catalog {

  constructor(
    public id: string,
    public minWeight: number,
    public maxWeight: number,
    public price: number,
    public source: City,
    public destination: City
  ) {}

}
