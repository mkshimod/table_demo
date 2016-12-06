import { Component } from '@angular/core';

import { Supplier } from '../supplier';

@Component({
  selector: 'supplier-form',
  templateUrl: 'supplier-form.component.html'
})

export class SupplierFormComponent {

  submitted = false;

  model = new Supplier('Company Name', 'Engineering', 'Agency Name', 'Prime Award');

  onSubmit() {
    this.submitted = true;
  }

  newCompany() {
    this.model = new Supplier('ANother Company Name', 'Business', 'Another Agency Name', 'Sub Award');
  }

  // TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
