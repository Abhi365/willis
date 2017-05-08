import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import {sampleCarriers} from "../carriers";

@Component({
  selector: 'app-carrier-search',
  templateUrl: './carrier-search.component.html',
  styleUrls: ['./carrier-search.component.css']
})
export class CarrierSearchComponent implements OnInit {
	columnDefs = [
  {headerName: "legalName", field: "legalName" },
  {headerName: "matchType", field: "matchType"},
  {headerName: "country", field: "country"},
  {headerName: "state", field: "state"},
  {headerName: "companyType", field: "companyType"},
  {headerName: "willisCode", field: "willisCode"},
  {headerName: "lorsCode", field: "lorsCode"},
  {headerName: "naicCode", field: "naicCode"},
  {headerName: "aiinCode", field: "aiinCode"},
  {headerName: "amBest", field: "amBest"},
  {headerName: "snp", field: "snp"},
  {headerName: "moodys", field: "moodys"},
  {headerName: "fitch", field: "fitch"},
  {headerName: "asOnDate", field: "asOnDate"},
  {headerName: "capacity", field: "capacity"},
  {headerName: "nwp", field: "nwp"},
  {headerName: "combinedRatio", field: "combinedRatio"},
  {headerName: "approvalStatus", field: "approvalStatus"},
  {headerName: "sanctionStatus", field: "sanctionStatus"},
  {headerName: "tobaEndDate", field: "tobaEndDate"},
  {headerName: "tobaIndicator", field: "tobaIndicator"},
  {headerName: "fatcaStatus", field: "fatcaStatus"},
];
  // put data directly onto the controller
  rowData = sampleCarriers; 
  gridOptions: GridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      enableSorting: true,
	  enableFilter: true,
	  enableColResize:true


  }


  constructor() { }

  ngOnInit() {
  }

}
