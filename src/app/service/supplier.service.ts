import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserLogin} from '../model/UserLogin';
import {Observable} from 'rxjs';
import {LoginResponse} from '../modules/login/service/LoginResponse';
import {Supplier} from '../model/Supplier';
import {Catalog} from '../model/Catalog';
import {City} from '../model/City';

@Injectable()
export class SupplierService {

  private server = 'https://lhi89edkb8.execute-api.us-east-1.amazonaws.com';
  private suppliersUrl = '/farmaceutica/api/v1/suppliers';
  private supplierByIdUrl = '/farmaceutica/api/v1/suppliers/{supplierId}';
  private catalogUrl = '/farmaceutica/api/v1/suppliers/{supplierId}/catalog';
  private citiesUrl = '/farmaceutica/api/v1/cities';

  constructor(private httpClient: HttpClient) {
  }

  public retrieveSupplierById(supplierId: string): Observable<Supplier> {
    let url = this.retrieveSupplierByIdUrl();
    url = url.replace('{supplierId}', supplierId);
    return this.httpClient.get<Supplier>(url, {responseType: 'json'});
  }

  public retrieveSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.retrieveSuppliersUrl(), {responseType: 'json'});
  }

  public retrieveCatalogBySupplier(supplierId: string): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(this.retrieveCatalogBySupplerUrl(supplierId), {responseType: 'json'});
  }

  public retrieveCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.retrieveCitiesUrl(), {responseType: 'json'});
  }

  private retrieveSupplierByIdUrl(): string {
    return this.server + this.supplierByIdUrl;
  }

  private retrieveSuppliersUrl(): string {
    return this.server + this.suppliersUrl;
  }

  private retrieveCatalogBySupplerUrl(supplierId: string): string {
    const url = this.server + this.catalogUrl;
    return url.replace('{supplierId}', supplierId);
  }

  private retrieveCitiesUrl(): string {
    return this.server + this.citiesUrl;
  }


}
