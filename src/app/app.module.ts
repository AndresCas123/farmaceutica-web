import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeClientComponent } from './modules/client/home-client/home-client.component';
import { DeliveryCreateComponent } from './modules/client/delivery-create/delivery-create.component';
import { DeliveryDetailComponent } from './modules/client/delivery-detail/delivery-detail.component';
import { OfferCreateComponent } from './modules/supplier/offer-create/offer-create.component';
import { LoginComponent } from './modules/login/login.component';
import {FormsModule} from '@angular/forms';
import { CatalogComponent } from './modules/client/catalog/catalog.component';
import {PharmaceuticalServiceLogin} from './modules/login/service/pharmaceutical.service.login';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { ReportComponent } from './modules/client/report/report.component';
import {JwtService} from './modules/login/service/JwtService';
import { HomeSupplierComponent } from './modules/supplier/home-supplier/home-supplier.component';
import {SupplierService} from './service/supplier.service';
import {SharedDataService} from './service/shared.data.service';
import {DeliveryService} from './service/delivery.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeClientComponent,
    DeliveryCreateComponent,
    DeliveryDetailComponent,
    OfferCreateComponent,
    LoginComponent,
    CatalogComponent,
    ReportComponent,
    HomeSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PharmaceuticalServiceLogin,
    SupplierService,
    DeliveryService,
    JwtService,
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
