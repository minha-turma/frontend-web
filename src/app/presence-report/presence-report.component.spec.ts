import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceReportComponent } from './presence-report.component';

describe('PresenceReportComponent', () => {
  let component: PresenceReportComponent;
  let fixture: ComponentFixture<PresenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
