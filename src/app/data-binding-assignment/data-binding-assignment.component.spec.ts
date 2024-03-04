import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingAssignmentComponent } from './data-binding-assignment.component';

describe('DataBindingAssignmentComponent', () => {
  let component: DataBindingAssignmentComponent;
  let fixture: ComponentFixture<DataBindingAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingAssignmentComponent]
    });
    fixture = TestBed.createComponent(DataBindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
