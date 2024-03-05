import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBindingComponent } from './all-binding.component';

describe('AllBindingComponent', () => {
  let component: AllBindingComponent;
  let fixture: ComponentFixture<AllBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBindingComponent]
    });
    fixture = TestBed.createComponent(AllBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
