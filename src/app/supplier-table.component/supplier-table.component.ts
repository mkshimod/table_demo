import {  Component, OnInit }     from '@angular/core';
import {  TableDataService  }     from '../table-data.service';
import {  LocalDataSource   }     from "ng2-smart-table";

@Component({
  selector: 'supplier-table',
  template: `<ng2-smart-table [settings]="settings" [source]="tableData"></ng2-smart-table>`,
  styleUrls: [],
  providers: [ TableDataService ]
})

export class SupplierTableComponent implements OnInit {
  settings = {
    columns: {
      year: {
        title: 'Year'
      },
      company: {
        title: 'Company'
      },
      industry: {
        title: 'Industry'
      },
      agency: {
        title: 'Agency'
      },
      type: {
        title: 'Type'
      },
      city: {
        title: 'City'
      },
      state: {
        title: 'State'
      },
      zip: {
        title: 'Zip Code'
      },
      county: {
        title: 'County'
      },
      value: {
        title: 'Value'
      }
    },
    hideSubHeader: true,
    actions: {
      columnTitle: false,
      add: false,
      edit: false,
      delete: false
    }
  };
  tableData: LocalDataSource;

  constructor(private tableDataService: TableDataService) { }


  public ngOnInit() {
    this.initTable();
  }

  private initTable(): void {
    this.tableData = new LocalDataSource();
    this.tableDataService.getSampleData()
      .then( (sampleData) => {
        this.tableData.load(sampleData);
      })

  }
}
