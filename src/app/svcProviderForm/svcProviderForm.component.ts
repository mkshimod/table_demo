import { Component } from '@angular/core';



@Component({
  selector: 'svc-provider-form',
  templateUrl: 'svcProviderForm.component.html'
})

export class SupplierFormComponent {

  submitted = false;

  model;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
