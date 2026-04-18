import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { ServerStatusService } from './server-status.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
  host: {
    '[class.hidden]': 'isHidden()',
  },
})
export class ServerStatusComponent implements OnInit {
  constructor() {
    effect(() => {
      if (this.isReady()) {
        setTimeout(() => {
          this.isHidden.set(true);
        }, 3000);
      }
    });
  }

  private statusService = inject(ServerStatusService);

  isReady = this.statusService.isReady;
  isError = this.statusService.isError;
  isHidden = signal(false);

  ngOnInit() {
    this.statusService.checkServerStatus();
  }
}
