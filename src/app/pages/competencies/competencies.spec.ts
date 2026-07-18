import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competencies } from './competencies';

describe('Competencies', () => {
  let component: Competencies;
  let fixture: ComponentFixture<Competencies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Competencies],
    }).compileComponents();

    fixture = TestBed.createComponent(Competencies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
