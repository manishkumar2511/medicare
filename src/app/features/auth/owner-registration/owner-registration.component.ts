import { Component } from '@angular/core';
import { PrimematerialModule } from '../../../core/primematerial.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-registration',
  imports: [
    PrimematerialModule,
  ],
  templateUrl: './owner-registration.component.html',
  styleUrl: './owner-registration.component.scss'
})
export class OwnerRegistrationComponent {
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

  states = [
    { id: '1', name: 'Maharashtra' },
    { id: '2', name: 'Gujarat' },
    { id: '3', name: 'Delhi' }
  ];

  register() {
    console.log(this.model);
  }
}

