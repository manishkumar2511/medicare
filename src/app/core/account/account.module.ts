import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { PrimematerialModule } from '../../primematerial.module';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    PrimematerialModule,
  LoginComponent,
  AccountComponent
  ]
})
export class AccountModule {}
