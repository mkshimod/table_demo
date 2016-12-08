import { Component, Input } from '@angular/core'


@Component({
  selector: 'svc-detail',
  templateUrl: 'svcDetail.component.html'
})

export class ServiceProviderDetailComponent {
@Input() ServiceProvider: any;


}

