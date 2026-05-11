import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialsComponent } from './socials.component';
import { Social } from '../../interfaces/profile.model';

describe('SocialsComponent', () => {
  let component: SocialsComponent;
  let fixture: ComponentFixture<SocialsComponent>;

  const MOCK_SOCIALS: Social[] = [
    { name: 'GitHub', url: 'https://github.com', icon: 'gh.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'li.svg' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('socials', []);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render a link for each social item', () => {
    fixture.componentRef.setInput('socials', MOCK_SOCIALS);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('.social-link');

    expect(links.length).toEqual(MOCK_SOCIALS.length);
  });
});
