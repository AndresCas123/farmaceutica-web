import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../../service/supplier.service';
import {Supplier} from '../../../model/Supplier';
import {Catalog} from '../../../model/Catalog';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public suppliers: Supplier[] = [];
  public catalogs: Catalog[] = [];

  constructor(public supplierService: SupplierService) { }

  ngOnInit(): void {
    this.supplierService.retrieveSuppliers().subscribe(value => this.suppliers = value);
  }

  public retrieveCatalogBySupplierId(supplierId: string): void {
    this.supplierService.retrieveCatalogBySupplier( supplierId )
      .subscribe( value => this.catalogs = value );
  }

}
