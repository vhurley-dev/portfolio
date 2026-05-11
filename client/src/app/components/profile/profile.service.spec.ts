import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Profile } from './interfaces/profile.model';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the profile data', () => {
    const dummyProfile: Partial<Profile> = { name: 'Victoria' };

    service.getProfile().subscribe((profile) => {
      expect(profile.name).toBe('Victoria');
    });

    const req = httpMock.expectOne('./assets/data/profile.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProfile);
  });
});
