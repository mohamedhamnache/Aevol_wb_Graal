import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionComponent } from './companion.component';

describe('CompanionComponent', () => {
  let component: CompanionComponent;
  let fixture: ComponentFixture<CompanionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
