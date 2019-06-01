import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatConduiteexComponent } from './candidat-conduiteex.component';

describe('CandidatConduiteexComponent', () => {
  let component: CandidatConduiteexComponent;
  let fixture: ComponentFixture<CandidatConduiteexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatConduiteexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatConduiteexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
