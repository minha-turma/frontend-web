import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingReportComponent } from './feeling-report.component';

describe('FeelingReportComponent', () => {
  let component: FeelingReportComponent;
  let fixture: ComponentFixture<FeelingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
