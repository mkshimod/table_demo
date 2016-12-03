import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { Ng2SmartTableModule }  from "ng2-smart-table";
import { Ng2TableModule }       from "ng2-table";

import { AppComponent }         from './app.component';
import {SupplierTableComponent} from './supplier-table.component';
import {SuppliersPageComponent} from './suppliers-page.component';
import {HomeComponent}          from './home.component';



@NgModule({
  declarations: [
    AppComponent,
    SupplierTableComponent,
    SuppliersPageComponent,
    HomeComponent
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
