import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Track} from '../../general/types/types';
import {TrackService} from './track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  allTracks$: Observable<Track[]>;
  constructor( private trackService: TrackService) {}

  ngOnInit() {
    this.allTracks$ = this.trackService.getAllTracks();
  }
}
