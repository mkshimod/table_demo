import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SuppliersPageComponent} from './suppliers-page.component';
import {HomeComponent}          from './home.component';

const appRoutes: Routes = [
  {
    path: 'suppliers',
    component: SuppliersPageComponent
  },
  {
    path: '',
    component: HomeComponent
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
