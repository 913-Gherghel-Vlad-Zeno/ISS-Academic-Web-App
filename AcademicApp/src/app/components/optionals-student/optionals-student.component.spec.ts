import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalsStudentComponent } from './optionals-student.component';

describe('OptionalsStudentComponent', () => {
  let component: OptionalsStudentComponent;
  let fixture: ComponentFixture<OptionalsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalsStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
