import {  Component, Input, OnInit, SimpleChanges }     from '@angular/core';
import {  LocalDataSource   }     from "ng2-smart-table";

@Component({
  selector: 'supplier-table',
  template: `<ng2-smart-table [settings]="tableSettings" [source]="data"></ng2-smart-table>`,
  styleUrls: [],
})

export class SupplierTableComponent implements OnInit {
  // @Input() tableDataPromise: Promise<any>;
  @Input() tableSettings: any;
  @Input() tableData: any;

  data: LocalDataSource;

  constructor() {}


  public ngOnInit() {
    this.data = new LocalDataSource();
    this.initTable();
  }


  private initTable(): void {
    this.data.load(this.tableData);

  }
}
