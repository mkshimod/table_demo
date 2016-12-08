import { Component, OnInit } from '@angular/core';
import { TableDataService }   from '../table-data.service';
import { SAMPLE_TABLEDATA } from '../mock-data/service-provider-list-item';


@Component({
  selector: 'svc-dir-page',
  templateUrl: 'svcDirPage.component.html',
  styleUrls: ['svcDirPage.component.less'],
  providers: [ TableDataService ]
})
export class SvcDirPageComponent implements OnInit {
  title = 'DoD Spending';
  description = 'Short description of the page.';
  tableData = SAMPLE_TABLEDATA;
  rowData: any;

  // Have settings here or in table component?
  tableSettings = {
    columns: {},
    hideSubHeader: true,
    actions: {
      columnTitle: false,
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      perPage: 12
    }
  };




  constructor(private tableDataService: TableDataService) { }

  public ngOnInit() {
    this.getTableData();      // Get data for table

  }

  private getTableData(): void {
    this.tableSettings.columns = this.tableData.columns;
    // TODO find better names
    this.rowData = this.tableData.tableData;
  }

}
