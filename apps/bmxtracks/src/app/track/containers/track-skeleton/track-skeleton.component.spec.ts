import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSkeletonComponent } from './track-skeleton.component';

describe('TrackSkeletonComponent', () => {
  let component: TrackSkeletonComponent;
  let fixture: ComponentFixture<TrackSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
