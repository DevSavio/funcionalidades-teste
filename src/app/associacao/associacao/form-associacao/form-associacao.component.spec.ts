import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssociacaoComponent } from './form-associacao.component';

describe('FormAssociacaoComponent', () => {
  let component: FormAssociacaoComponent;
  let fixture: ComponentFixture<FormAssociacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAssociacaoComponent]
    });
    fixture = TestBed.createComponent(FormAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
