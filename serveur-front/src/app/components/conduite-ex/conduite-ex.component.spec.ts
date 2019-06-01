import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduiteExComponent } from './conduite-ex.component';

describe('ConduiteExComponent', () => {
  let component: ConduiteExComponent;
  let fixture: ComponentFixture<ConduiteExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduiteExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduiteExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
