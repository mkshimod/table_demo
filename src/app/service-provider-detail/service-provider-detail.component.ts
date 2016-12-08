import { Component, Input } from '@angular/core'


@Component({
  selector: 'service-provider-detail',
  templateUrl: './service-provider-detail.component.html'
})

export class ServiceProviderDetailComponent {
@Input() ServiceProvider: any;


}

