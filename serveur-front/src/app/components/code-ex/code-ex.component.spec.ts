import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExComponent } from './code-ex.component';

describe('CodeExComponent', () => {
  let component: CodeExComponent;
  let fixture: ComponentFixture<CodeExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
