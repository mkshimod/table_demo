import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SuppliersPageComponent}         from './suppliers-page.component/suppliers-page.component';
import {HomePageComponent}              from './home-page.component/home-page.component';
import {ServiceProvidersPageComponent}  from './service-providers-page.component/service-providers-page.component';

const appRoutes: Routes = [
  {
    path: 'suppliers',
    component: SuppliersPageComponent
  },
  {
    path: 'service-providers',
    component: ServiceProvidersPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
