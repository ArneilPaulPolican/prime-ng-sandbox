import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRouterActivate } from './application-router-activate';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './components/sales/sales.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    SalesComponent,
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ApplicationRoutingModule,
    HttpClientModule,
  ],
  providers:[
    ApplicationRouterActivate,
  ]
})
export class ApplicationModule { }
