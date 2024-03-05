import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAssignmentComponent } from './directives-assignment.component';

describe('DirectivesAssignmentComponent', () => {
  let component: DirectivesAssignmentComponent;
  let fixture: ComponentFixture<DirectivesAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesAssignmentComponent]
    });
    fixture = TestBed.createComponent(DirectivesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
