import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconModule } from '../../../../../projects/icon/src/public-api';
import { LabTabsComponent } from './components/lab-tabs/lab-tabs.component';
import { TAB_DATA } from './lab-tabs-data';
import { LabTab } from './interfaces/component.model';
import { LabComboBoxComponent } from './components/lab-combo-box/lab-combo-box.component';

@Component({
  selector: 'app-component-lab',
  imports: [RouterLink, IconModule, LabTabsComponent, LabComboBoxComponent],
  templateUrl: './component-lab.component.html',
  styleUrl: './component-lab.component.scss',
})
export class ComponentLabComponent {
  tabs = signal<LabTab[]>(TAB_DATA);
}
