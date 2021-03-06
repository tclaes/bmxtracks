import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackService } from '../../track.service';
import { Track } from '../../models/track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  allTracks$: Observable<Track[]>;
  constructor(private trackService: TrackService) {}

  ngOnInit() {
    this.allTracks$ = this.trackService.tracks;
    this.loadInitialData();
  }

  skeleton(n: number) {
    return Array(n);
  }

  private loadInitialData() {
    this.trackService.getAllTracks().subscribe((tracks) => {
      this.trackService.setState(tracks);
    });
  }
}
