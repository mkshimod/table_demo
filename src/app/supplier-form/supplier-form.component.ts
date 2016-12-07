import { Component } from '@angular/core';

import { ServiceProviderDetail } from '../mock-data/service-provider-detail';

@Component({
  selector: 'supplier-form',
  templateUrl: 'supplier-form.component.html'
})

export class SupplierFormComponent {

  submitted = false;

  model = new ServiceProviderDetail('RSI', '155 Kapalulu Pl', '155 Kapaululu Pl', 45678, 26987867);

  onSubmit() {
    this.submitted = true;
  }

  // TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
