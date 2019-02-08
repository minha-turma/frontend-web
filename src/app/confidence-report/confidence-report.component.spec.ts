import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceReportComponent } from './confidence-report.component';

describe('ConfidenceReportComponent', () => {
  let component: ConfidenceReportComponent;
  let fixture: ComponentFixture<ConfidenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
