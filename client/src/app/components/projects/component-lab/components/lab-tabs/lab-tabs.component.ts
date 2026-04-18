import { Component, input, signal } from '@angular/core';
import { Tabs, TabList, Tab, TabPanel, TabContent } from '@angular/aria/tabs';
import { LabTab } from '../../interfaces/component.model';

@Component({
  selector: 'app-lab-tabs',
  imports: [Tabs, TabList, Tab, TabPanel, TabContent],
  templateUrl: './lab-tabs.component.html',
  styleUrl: './lab-tabs.component.scss',
})
export class LabTabsComponent {
  tabs = input.required<LabTab[]>();
  selectedTab = signal('');

  ngOnInit() {
    if (this.tabs().length > 0) {
      this.selectedTab.set(this.tabs()[0].id);
    }
  }
}
