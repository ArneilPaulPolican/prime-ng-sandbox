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

//component
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    SalesComponent,
    PurchasesComponent,
    SidebarComponentComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    HttpClientModule,
    // component
    SidebarModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
  ],
  providers:[
    ApplicationRouterActivate,
  ]
})
export class ApplicationModule { }
