import { Component, HostListener, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { CountryService } from './country.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ComboboxOption } from '../../interfaces/component.model';
import { ElementRef, effect, viewChild } from '@angular/core';

@Component({
  selector: 'app-lab-combo-box',
  imports: [ReactiveFormsModule],
  templateUrl: './lab-combo-box.component.html',
  styleUrl: './lab-combo-box.component.scss',
})
export class LabComboBoxComponent {
  private el = inject(ElementRef);
  countryService = inject(CountryService);
  searchControl = new FormControl('');
  isLoading = signal(false);
  isOpen = signal(false);

  constructor() {
    effect(() => {
      const index = this.activeOptionIndex();

      if (index >= 0) {
        const element = document.getElementById('opt-' + index);

        if (element) {
          element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
          });
        }
      }
    });
  }

  // 1. Create an observable from the input changes
  private results$ = this.searchControl.valueChanges.pipe(
    startWith(''), // Triggers the initial 'all countries' load
    debounceTime(150), // Shorter debounce for a snappier feel
    distinctUntilChanged(),
    tap(() => this.isLoading.set(true)),
    switchMap((query) => this.countryService.getCountries(query || '')),
    tap(() => {
      this.isLoading.set(false);
      this.activeOptionIndex.set(-1); // Reset highlight when list changes
    }),
  );

  // 2. Convert it to a Signal for the template
  options = toSignal(this.results$, { initialValue: [] });

  // 3. UI State for keyboard navigation
  activeOptionIndex = signal(-1);

  onKeyDown(event: KeyboardEvent) {
    const options = this.options();
    if (!this.isOpen()) {
      if (event.key === 'ArrowDown') this.isOpen.set(true);
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.activeOptionIndex.update((i) =>
          i < options.length - 1 ? i + 1 : 0,
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeOptionIndex.update((i) =>
          i > 0 ? i - 1 : options.length - 1,
        );
        break;
      case 'Enter':
        event.preventDefault();
        if (this.activeOptionIndex() >= 0) {
          this.selectOption(options[this.activeOptionIndex()]);
        }
        break;
      case 'Escape':
        this.isOpen.set(false);
        break;
    }
  }

  selectOption(option: ComboboxOption) {
    this.searchControl.setValue(option.label, { emitEvent: false });
    this.isOpen.set(false);
    this.activeOptionIndex.set(-1);
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    // Check if the element receiving focus is outside the component
    const linkedElement = event.relatedTarget as HTMLElement;
    if (!this.el.nativeElement.contains(linkedElement)) {
      this.isOpen.set(false);
      this.activeOptionIndex.set(-1);
    }
  }
}
