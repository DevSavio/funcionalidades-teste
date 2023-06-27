import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociacaoPageComponent } from './associacao-page.component';

describe('AssociacaoPageComponent', () => {
  let component: AssociacaoPageComponent;
  let fixture: ComponentFixture<AssociacaoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociacaoPageComponent]
    });
    fixture = TestBed.createComponent(AssociacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
