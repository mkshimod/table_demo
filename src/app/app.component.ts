import { Component, OnInit } from '@angular/core';
import { TableDataService }  from './table-data.service';
import { Data }              from './sample-data';
import { LocalDataSource }   from 'ng2-smart-table';
import {Local} from "protractor/built/driverProviders";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableDataService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  tableData: LocalDataSource;
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
