import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-modal',
  imports: [A11yModule],
  templateUrl: './cdk-modal.component.html',
  styleUrl: './cdk-modal.component.scss',
})
export class CdkModalComponent {
  // Inject DialogRef from @angular/cdk/dialog
  dialogRef = inject(DialogRef<{ saved: boolean }, CdkModalComponent>);

  username = '';

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({ saved: true });
  }
}
