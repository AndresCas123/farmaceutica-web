import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeClientComponent} from './modules/client/home-client/home-client.component';
import {LoginComponent} from './modules/login/login.component';
import {DeliveryCreateComponent} from './modules/client/delivery-create/delivery-create.component';
import {DeliveryDetailComponent} from './modules/client/delivery-detail/delivery-detail.component';
import {CatalogComponent} from './modules/client/catalog/catalog.component';
import {ReportComponent} from './modules/client/report/report.component';
import {HomeSupplierComponent} from './modules/supplier/home-supplier/home-supplier.component';
import {OfferCreateComponent} from './modules/supplier/offer-create/offer-create.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home-client', component: HomeClientComponent, children: [
      {path: 'create', component: DeliveryCreateComponent, outlet: 'client_outlet'},
      {path: 'search', component: DeliveryDetailComponent, outlet: 'client_outlet'},
      {path: 'catalog', component: CatalogComponent, outlet: 'client_outlet'},
      {path: 'reports', component: ReportComponent, outlet: 'client_outlet'}
    ] },
  { path: 'home-supplier', component: HomeSupplierComponent, children: [
      {path: 'offer', component: OfferCreateComponent, outlet: 'supplier_outlet'}
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
