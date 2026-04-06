import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServerStatusService {
  public isReady = signal<boolean>(false);

  setReady(status: boolean) {
    this.isReady.set(status);
  }
}
