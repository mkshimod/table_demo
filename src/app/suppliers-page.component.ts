import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppliers-page',
  template: `
    <h3>Page Title</h3>
    <div>
      <p>Some description of the page here</p>
    </div>
    <supplier-table></supplier-table>
  `
})
export class SuppliersPageComponent implements OnInit {
  title = 'List of Suppliers';

  public ngOnInit() { }
}
