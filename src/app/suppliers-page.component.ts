import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppliers-page',
  template: `<supplier-table></supplier-table>`
})
export class SuppliersPage implements OnInit {
  title = 'List of Suppliers';

  public ngOnInit() { }
}
