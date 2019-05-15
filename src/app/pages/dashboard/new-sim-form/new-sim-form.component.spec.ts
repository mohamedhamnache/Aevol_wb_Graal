import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSimFormComponent } from './new-sim-form.component';

describe('NewSimFormComponent', () => {
  let component: NewSimFormComponent;
  let fixture: ComponentFixture<NewSimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
