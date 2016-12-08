import { Component, Input, OnInit } from '@angular/core'
import { CompanyData, Address }      from '../mock-data/service-provider-detail';


@Component({
  selector: 'svc-detail',
  templateUrl: 'svcDetail.component.html',
  styleUrls: ['svcDetail.component.less']
})

export class ServiceProviderDetailComponent {
@Input() serviceProviderData: CompanyData;

public svcProviderAddresses: Address[];

ngOnInit() {
  this.svcProviderAddresses = this.serviceProviderData.address;
}

}

