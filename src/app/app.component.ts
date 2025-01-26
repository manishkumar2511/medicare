import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialog } from 'primeng/confirmdialog';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,SplitButtonModule,ToastModule,ConfirmDialog],
  providers:[MessageService,ConfirmationService ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medicares';
  items!: MenuItem[];
  constructor(private confirmationService: ConfirmationService,private messageService: MessageService){
    this.items = [
      {
          label: 'Update',
          command: () => {
              this.update();
          }
      },
      {
          label: 'Delete',
          command: () => {
              this.delete();
          }
      },
      { label: 'Angular Website', url: 'http://angular.io' },
      { separator: true },
      { label: 'Upload', routerLink: ['/fileupload'] }
  ];
  }
  save() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
}

update() {
    this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
}

delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
}

confirm1(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true,
      },
      acceptButtonProps: {
          label: 'Save',
      },
      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
      },
      reject: () => {
          this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
              life: 3000,
          });
      },
  });
}

confirm2(event: Event) {
  this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true,
      },
      acceptButtonProps: {
          label: 'Delete',
          severity: 'danger',
      },

      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      },
  });
}
}
