import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCodeComponent } from './candidat-code.component';

describe('CandidatCodeComponent', () => {
  let component: CandidatCodeComponent;
  let fixture: ComponentFixture<CandidatCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
