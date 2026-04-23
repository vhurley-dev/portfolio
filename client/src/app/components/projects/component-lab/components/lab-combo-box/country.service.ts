import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ComboboxOption } from '../../interfaces/component.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly COUNTRIES: ComboboxOption[] = [
    { id: 'AR', label: 'Argentina', description: 'South America' },
    { id: 'AU', label: 'Australia', description: 'Oceania' },
    { id: 'AT', label: 'Austria', description: 'Europe' },
    { id: 'BR', label: 'Brazil', description: 'South America' },
    { id: 'CA', label: 'Canada', description: 'North America' },
    { id: 'CN', label: 'China', description: 'Asia' },
    { id: 'EG', label: 'Egypt', description: 'Africa' },
    { id: 'FR', label: 'France', description: 'Europe' },
    { id: 'DE', label: 'Germany', description: 'Europe' },
    { id: 'IN', label: 'India', description: 'Asia' },
    { id: 'ID', label: 'Indonesia', description: 'Asia' },
    { id: 'IT', label: 'Italy', description: 'Europe' },
    { id: 'JP', label: 'Japan', description: 'Asia' },
    { id: 'MX', label: 'Mexico', description: 'North America' },
    { id: 'NL', label: 'Netherlands', description: 'Europe' },
    { id: 'NZ', label: 'New Zealand', description: 'Oceania' },
    { id: 'NG', label: 'Nigeria', description: 'Africa' },
    { id: 'NO', label: 'Norway', description: 'Europe' },
    { id: 'PT', label: 'Portugal', description: 'Europe' },
    { id: 'ZA', label: 'South Africa', description: 'Africa' },
    { id: 'KR', label: 'South Korea', description: 'Asia' },
    { id: 'ES', label: 'Spain', description: 'Europe' },
    { id: 'SE', label: 'Sweden', description: 'Europe' },
    { id: 'CH', label: 'Switzerland', description: 'Europe' },
    { id: 'TR', label: 'Turkey', description: 'Asia/Europe' },
    { id: 'GB', label: 'United Kingdom', description: 'Europe' },
    { id: 'US', label: 'United States', description: 'North America' },
    { id: 'VN', label: 'Vietnam', description: 'Asia' },
  ].sort((a, b) => a.label.localeCompare(b.label));

  getCountries(query: string = ''): Observable<ComboboxOption[]> {
    const filtered = query.trim()
      ? this.COUNTRIES.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase()),
        )
      : this.COUNTRIES;

    return of(filtered).pipe(delay(300));
  }
}
