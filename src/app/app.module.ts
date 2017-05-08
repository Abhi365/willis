import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from 'ag-grid-ng2/main';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DisplayComponent } from './display/display.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MarketSecurityAdminComponent } from './market-security-admin/market-security-admin.component';
import { MarketSecurityComponent } from './market-security/market-security.component';
import { CarrierSearchComponent } from './carrier-search/carrier-search.component';
import { CarrierDetailsComponent } from './carrier-details/carrier-details.component';
import { SummaryComponent } from './summary/summary.component';
import { FinancialsComponent } from './financials/financials.component';
import { DocumentsComponent } from './documents/documents.component';
import { LicensesComponent } from './licenses/licenses.component';


const appRoutes: Routes = [
  { path: 'market-security', component: MarketSecurityComponent },
  { path: 'market-security-admin', component: MarketSecurityAdminComponent},
  { path: 'carrier-search', component: CarrierSearchComponent},
  { path: 'carrier-details', component: CarrierDetailsComponent,
	
	children: [
      { path: 'summary', component: SummaryComponent },
      { path: 'financials', component: FinancialsComponent },
	  { path: 'documents', component: DocumentsComponent },
	  { path: 'licenses', component: LicensesComponent },
    ]
	},


 
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DisplayComponent,
    FooterComponent,
    MarketSecurityAdminComponent,
    MarketSecurityComponent,
    CarrierSearchComponent,
    CarrierDetailsComponent,
    SummaryComponent,
    FinancialsComponent,
    DocumentsComponent,
    LicensesComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









