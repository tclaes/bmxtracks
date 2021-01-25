import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTrackComponent } from './report-track.component';

describe('ReportTrackComponent', () => {
  let component: ReportTrackComponent;
  let fixture: ComponentFixture<ReportTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
