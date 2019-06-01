import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjtCodeComponent } from './ajt-code.component';

describe('AjtCodeComponent', () => {
  let component: AjtCodeComponent;
  let fixture: ComponentFixture<AjtCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjtCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjtCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
