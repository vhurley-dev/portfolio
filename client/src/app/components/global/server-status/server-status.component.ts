import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ServerStatusService } from './server-status.service';
import { catchError, of, retry } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss',
})
export class ServerStatusComponent implements OnInit {
  private http = inject(HttpClient);
  private healthService = inject(ServerStatusService);

  isReady = this.healthService.isReady;

  ngOnInit() {
    if (!this.isReady()) {
      this.pingServer();
    }
  }

  pingServer() {
    const API_URL = environment.apiHealthUrl;

    this.http
      .get(API_URL)
      .pipe(
        retry({ delay: 2000 }),
        catchError(() => of(false)),
      )
      .subscribe((response) => {
        if (response) {
          this.healthService.setReady(true);
        }
      });
  }
}
