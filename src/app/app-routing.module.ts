import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/application', pathMatch: 'full'},
    {path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)},
    {path: 'application', loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
