import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationComponent } from '../application/application.component';
import { DashboardComponent } from '../application/components/dashboard/dashboard.component';
import { SalesComponent } from '../application/components/sales/sales.component';
import { PurchasesComponent } from '../application/components/purchases/purchases.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecurityComponent } from './security.component';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SecurityRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class SecurityModule { }
