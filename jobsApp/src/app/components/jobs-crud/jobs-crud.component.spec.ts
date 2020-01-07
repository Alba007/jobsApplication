import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCrudComponent } from './jobs-crud.component';

describe('JobsCrudComponent', () => {
  let component: JobsCrudComponent;
  let fixture: ComponentFixture<JobsCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
