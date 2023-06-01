import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
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
    CommonModule,
    SecurityRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class SecurityModule { }
