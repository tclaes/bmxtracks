import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Track} from '../../models/track';
import {TrackService} from '../../track.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {

  track$: Observable<Track[]>;
  constructor(
    private trackService: TrackService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.track$ = this.trackService.getTrackByUid(params.id);
    });
  }
}
