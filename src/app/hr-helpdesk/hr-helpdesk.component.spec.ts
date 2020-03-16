import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHelpdeskComponent } from './hr-helpdesk.component';

describe('HrHelpdeskComponent', () => {
  let component: HrHelpdeskComponent;
  let fixture: ComponentFixture<HrHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
