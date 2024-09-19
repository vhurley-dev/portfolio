import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Profile } from './interfaces/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return (this.http.get<Profile>('./assets/data/profile.json'));
  }
}
