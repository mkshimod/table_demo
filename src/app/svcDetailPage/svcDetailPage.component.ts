import { Component } from '@angular/core';
import { SampleRaytheonData } from '../mock-data/service-provider-detail';

@Component({
  selector: 'svc-detail-page',
  templateUrl: 'scvDetailPage.component.html'
})

export class SvcDetailPageComponent {
  public selectedSvcProviderData = SampleRaytheonData;
}
