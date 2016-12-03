import { Injectable }   from '@angular/core';

import { Data, SAMPLEDATA } from './sample-data';

@Injectable()
export class TableDataService {
  getSampleData(): Promise<Data[]> {
    return Promise.resolve(SAMPLEDATA);
  }
}
