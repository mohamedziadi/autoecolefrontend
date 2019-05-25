import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatConduiteComponent } from './candidat-conduite.component';

describe('CandidatConduiteComponent', () => {
  let component: CandidatConduiteComponent;
  let fixture: ComponentFixture<CandidatConduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatConduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
