import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCodeexComponent } from './candidat-codeex.component';

describe('CandidatCodeexComponent', () => {
  let component: CandidatCodeexComponent;
  let fixture: ComponentFixture<CandidatCodeexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatCodeexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatCodeexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
