import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduiteComponent } from './conduite.component';

describe('ConduiteComponent', () => {
  let component: ConduiteComponent;
  let fixture: ComponentFixture<ConduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
