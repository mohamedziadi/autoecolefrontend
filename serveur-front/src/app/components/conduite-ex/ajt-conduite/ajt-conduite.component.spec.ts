import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtConduiteComponent } from './ajt-conduite.component';

describe('AjtConduiteComponent', () => {
  let component: AjtConduiteComponent;
  let fixture: ComponentFixture<AjtConduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtConduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
