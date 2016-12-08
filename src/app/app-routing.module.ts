import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SvcDirPageComponent }         from './svcDirPage/svcDirPage.component';
import {HomePageComponent}              from './homePage/homePage.component';
import {SvcDetailPageComponent}  from './svcDetailPage/svcDetailPage.component';

const appRoutes: Routes = [
  {
    path: 'svc-dir-page',
    component: SvcDirPageComponent
  },
  {
    path: 'svc-detail-page',
    component: SvcDetailPageComponent
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
