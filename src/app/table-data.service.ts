import { Injectable }   from '@angular/core';

import { SAMPLE_TABLEDATA } from './mock-data/service-provider-list-item';

@Injectable()
export class TableDataService {
  getSampleData(): Promise<any> {
    return Promise.resolve(SAMPLE_TABLEDATA);
  }
}
