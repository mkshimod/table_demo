import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { Ng2SmartTableModule }  from "ng2-smart-table";
import { Ng2TableModule }       from "ng2-table";

import { AppComponent }         from './app.component/app.component';
import {SupplierTableComponent} from './supplier-table.component/supplier-table.component';
import {SuppliersPageComponent} from './suppliers-page.component/suppliers-page.component';
import {HomePageComponent}          from './home-page.component/home-page.component';
import {SupplierFormComponent}  from './supplier-form.component/supplier-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SupplierTableComponent,
    SuppliersPageComponent,
    HomePageComponent,
    SupplierFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    Ng2TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
