import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { LabTabsComponent } from './components/lab-tabs/lab-tabs.component';
import { TAB_DATA } from './lab-tabs-data';
import { LabSection, LabTab } from './interfaces/component.model';
import { LabComboBoxComponent } from './components/lab-combo-box/lab-combo-box.component';
import { LabSectionComponent } from './components/lab-section/lab-section.component';
import componentLabData from '../../../../assets/data/component-lab.json';
import { LabModalComponent } from './components/lab-modals/lab-modal.component';

@Component({
  selector: 'app-component-lab',
  imports: [
    RouterLink,
    IconModule,
    LabTabsComponent,
    LabComboBoxComponent,
    LabSectionComponent,
    LabModalComponent,
  ],
  templateUrl: './component-lab.component.html',
  styleUrl: './component-lab.component.scss',
})
export class ComponentLabComponent {
  tabs = signal<LabTab[]>(TAB_DATA);
  labSections = signal<LabSection[]>(componentLabData['lab-sections']);
}
