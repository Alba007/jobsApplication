import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseeJobApplicationComponent } from './usee-job-application.component';

describe('UseeJobApplicationComponent', () => {
  let component: UseeJobApplicationComponent;
  let fixture: ComponentFixture<UseeJobApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseeJobApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseeJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
