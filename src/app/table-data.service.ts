import { Injectable }   from '@angular/core';

import { ServiceProviderListItem, SAMPLE_SERVICEPROVIDERLIST } from './mock-data/service-provider-list-item';

@Injectable()
export class TableDataService {
  getSampleData(): Promise<ServiceProviderListItem[]> {
    return Promise.resolve(SAMPLE_SERVICEPROVIDERLIST);
  }
}
