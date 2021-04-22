import {Department} from './Department';

export class City {

  constructor(
    public id: string,
    public name: string,
    public department: Department
  ) {}

}
