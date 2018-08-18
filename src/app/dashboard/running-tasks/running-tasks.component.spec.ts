import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningTasksComponent } from './running-tasks.component';

describe('RunningTasksComponent', () => {
  let component: RunningTasksComponent;
  let fixture: ComponentFixture<RunningTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
