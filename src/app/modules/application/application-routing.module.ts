import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRouterActivate } from './application-router-activate';
import { ApplicationComponent } from './application.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalesComponent } from './components/sales/sales.component';

const routes: Routes = [
  {
    path:'',
    component: ApplicationComponent,
    children: [
      {path: '', canActivate: [ApplicationRouterActivate], component: DashboardComponent},
      {path: 'dashboard', canActivate: [ApplicationRouterActivate], component: DashboardComponent},
      {path: 'sales', canActivate: [ApplicationRouterActivate], component: SalesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
