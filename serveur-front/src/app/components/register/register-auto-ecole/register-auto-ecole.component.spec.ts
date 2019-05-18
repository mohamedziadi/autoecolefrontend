import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAutoEcoleComponent } from './register-auto-ecole.component';

describe('RegisterAutoEcoleComponent', () => {
  let component: RegisterAutoEcoleComponent;
  let fixture: ComponentFixture<RegisterAutoEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAutoEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAutoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
