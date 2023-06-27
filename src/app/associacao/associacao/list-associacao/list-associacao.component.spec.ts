import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssociacaoComponent } from './list-associacao.component';

describe('ListAssociacaoComponent', () => {
  let component: ListAssociacaoComponent;
  let fixture: ComponentFixture<ListAssociacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAssociacaoComponent]
    });
    fixture = TestBed.createComponent(ListAssociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
