import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsComponentComponent } from './jobs-component.component';

describe('JobsComponentComponent', () => {
  let component: JobsComponentComponent;
  let fixture: ComponentFixture<JobsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
