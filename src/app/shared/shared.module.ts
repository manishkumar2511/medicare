import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimematerialModule } from '../primematerial.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimematerialModule
  ],
  exports: [PrimematerialModule]
})
export class SharedModule { }
