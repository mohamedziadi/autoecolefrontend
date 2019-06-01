import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutoEcoleComponent } from './my-auto-ecole.component';

describe('MyAutoEcoleComponent', () => {
  let component: MyAutoEcoleComponent;
  let fixture: ComponentFixture<MyAutoEcoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAutoEcoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAutoEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
