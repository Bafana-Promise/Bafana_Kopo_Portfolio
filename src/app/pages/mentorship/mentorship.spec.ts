import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentorship } from './mentorship';

describe('Mentorship', () => {
  let component: Mentorship;
  let fixture: ComponentFixture<Mentorship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mentorship],
    }).compileComponents();

    fixture = TestBed.createComponent(Mentorship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
