import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSimFormComponent } from './resume-sim-form.component';

describe('ResumeSimFormComponent', () => {
  let component: ResumeSimFormComponent;
  let fixture: ComponentFixture<ResumeSimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
