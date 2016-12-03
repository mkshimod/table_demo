import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {Ng2TableModule} from "ng2-table";
import {SupplierTable} from './supplier-table.component';
import {SuppliersPage} from './suppliers-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SupplierTable,
    SuppliersPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
