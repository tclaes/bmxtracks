import { Component, OnInit } from '@angular/core';
import {TrackService} from '../../track.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-track-filters',
  templateUrl: './track-filters.component.html',
  styleUrls: ['./track-filters.component.scss']
})
export class TrackFiltersComponent implements OnInit {

  allTags$: Observable<any>;
  constructor(
    private trackService: TrackService
  ) { }

  ngOnInit(): void {
    this.allTags$ = this.trackService.getAllTags();
    console.log(this.allTags$);
  }

}
