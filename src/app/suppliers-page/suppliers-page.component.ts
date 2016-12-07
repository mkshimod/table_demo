import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppliers-page',
  templateUrl: './suppliers-page.component.html'
})
export class SuppliersPageComponent implements OnInit {
  title = 'List of Service Providers';
  description = 'Short description of the page.';

  public ngOnInit() { }
}
