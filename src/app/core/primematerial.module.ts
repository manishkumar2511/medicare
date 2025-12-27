import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DropdownModule
  ],
  exports: [
    FormsModule,          
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DropdownModule
  ]
})
export class PrimematerialModule { }