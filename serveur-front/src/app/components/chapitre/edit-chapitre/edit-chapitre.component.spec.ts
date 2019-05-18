import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChapitre1Component } from './edit-chapitre.component';

describe('EditChapitre1Component', () => {
  let component: EditChapitre1Component;
  let fixture: ComponentFixture<EditChapitre1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChapitre1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChapitre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
