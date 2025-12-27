import { Component, inject, OnInit } from '@angular/core';
import { PrimematerialModule } from '../../../core/primematerial.module';
import { CommonService } from '../../../core/services/common';
import { State } from '../../../core/models/common/state.model';

@Component({
  selector: 'app-owner-registration',
  imports: [
    PrimematerialModule,
  ],
  templateUrl: './owner-registration.component.html',
  styleUrl: './owner-registration.component.scss'
})
export class OwnerRegistrationComponent implements OnInit {
  private commonService = inject(CommonService);
  states: State[] = [];

  ngOnInit(): void {
    this.getState();
    console.log('Owner Registration Component Initialized');
    console.log(this.states);
  }

  getState() {
    debugger;
    this.commonService.getState().subscribe({
      next: (res: State[]) => {
        this.states = [...res];
      },
    });
  }
  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    addressLine: '',
    city: '',
    postalCode: '',
    stateId: ''
  };

  register() {
    console.log(this.model);
  }
}

