import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConduiteComponent } from './add-conduite.component';

describe('AddConduiteComponent', () => {
  let component: AddConduiteComponent;
  let fixture: ComponentFixture<AddConduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
