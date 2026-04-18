import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry, timeout } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ServerStatusService {
  private http = inject(HttpClient);

  public isReady = signal<boolean>(false);
  public isError = signal<boolean>(false);
  public isChecking = signal<boolean>(false);

  checkServerStatus() {
    if (this.isReady() || this.isChecking()) return;

    this.isChecking.set(true);
    const API_URL = environment.apiHealthUrl;

    this.http
      .get(API_URL)
      .pipe(
        timeout(12000),
        retry({ count: 3, delay: 3000 }),
        catchError((err) => {
          this.isError.set(true);
          this.isChecking.set(false);
          return of(null);
        }),
      )
      .subscribe((response) => {
        if (response) {
          this.isReady.set(true);
          this.isError.set(false);
        }
        this.isChecking.set(false);
      });
  }
}
