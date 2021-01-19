import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFiltersComponent } from './track-filters.component';

describe('TrackFiltersComponent', () => {
  let component: TrackFiltersComponent;
  let fixture: ComponentFixture<TrackFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
