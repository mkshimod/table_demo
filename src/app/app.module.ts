import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { Ng2SmartTableModule }  from "ng2-smart-table";

import { AppComponent }         from './app/app.component';
import {DataDisplayTableComponent} from './dataDisplayTable/dataDisplayTable.component';
import {SvcDirPageComponent} from './svcDirPage/svcDirPage.component';
import {HomePageComponent}          from './homePage/homePage.component';
import {SupplierFormComponent}  from './svcProviderForm/svcProviderForm.component';
import {SvcDetailPageComponent} from "./svcDetailPage/svcDetailPage.component";
import {ServiceProviderDetailComponent} from './svcDetail/svcDetail.component';



@NgModule({
  declarations: [
    AppComponent,
    DataDisplayTableComponent,
    SvcDirPageComponent,
    HomePageComponent,
    SupplierFormComponent,
    SvcDetailPageComponent,
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
