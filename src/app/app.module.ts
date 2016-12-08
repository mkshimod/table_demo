import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { Ng2SmartTableModule }  from "ng2-smart-table";

import { AppComponent }         from './app/app.component';
import {DataDisplayTableComponent} from './data-display-table/data-display-table.component';
import {SuppliersPageComponent} from './supplier-directory-page/supplier-directory-page.component';
import {HomePageComponent}          from './home-page/home-page.component';
import {SupplierFormComponent}  from './supplier-form/supplier-form.component';
import {ServiceProvidersPageComponent} from "./service-providers-page/service-providers-page.component";
import {ServiceProviderDetailComponent} from './service-provider-detail/service-provider-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DataDisplayTableComponent,
    SuppliersPageComponent,
    HomePageComponent,
    SupplierFormComponent,
    ServiceProvidersPageComponent,
    ServiceProviderDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
