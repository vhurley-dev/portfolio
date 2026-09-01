import { Component, inject, output } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { CdkModalComponent } from './components/cdk-modal/cdk-modal.component';

@Component({
  selector: 'app-lab-modal',
  standalone: true,
  imports: [],
  templateUrl: './lab-modal.component.html',
  styleUrl: './lab-modal.component.scss',
})
export class LabModalComponent {
  private cdkDialog = inject(Dialog);
  saved = output<void>();

  openCdkDialog() {
    const dialogRef = this.cdkDialog.open(CdkModalComponent, {
      ariaLabelledBy: 'cdk-modal-title',
      ariaDescribedBy: 'cdk-modal-desc',
    });

    if (dialogRef.componentInstance) {
      dialogRef.componentInstance.username = 'JohnDoe';
    }

    dialogRef.closed.subscribe((result: any) => {
      if (result?.saved) {
        console.log('CDK dialog saved!');
      }
    });
  }
}
