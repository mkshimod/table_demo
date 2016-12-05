import { Component } from '@angular/core';

import { Supplier } from '../supplier';

@Component({
  selector: 'supplier-form',
  templateUrl: 'supplier-form.component.html'
})

export class SupplierFormComponent {

  submitted = false;

  model = new Supplier(1, 'Company Name', 'Engineering', 'Agency Name', 'Prime Award');

  onSubmit() {
    this.submitted = true;
  }

  // TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
