import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { Ng2SmartTableModule }  from "ng2-smart-table";

import { AppComponent }         from './app.component/app.component';
import {SupplierTableComponent} from './supplier-table.component/supplier-table.component';
import {SuppliersPageComponent} from './suppliers-page.component/suppliers-page.component';
import {HomePageComponent}          from './home-page.component/home-page.component';
import {SupplierFormComponent}  from './supplier-form.component/supplier-form.component';
import {ServiceProvidersPageComponent} from "./service-providers-page.component/service-providers-page.component";



@NgModule({
  declarations: [
    AppComponent,
    SupplierTableComponent,
    SuppliersPageComponent,
    HomePageComponent,
    SupplierFormComponent,
    ServiceProvidersPageComponent
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
