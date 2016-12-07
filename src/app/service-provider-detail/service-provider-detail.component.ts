import { Component, Input } from '@angular/core'
import { ServiceProviderDetail } from '../mock-data/service-provider-detail';


@Component({
  selector: 'service-provider-detail',
  templateUrl: './service-provider-detail.component.html'
})

export class ServiceProviderDetailComponent {
@Input()
  serviceProvider: ServiceProviderDetail;


}

