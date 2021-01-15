import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackListComponent } from './containers/track-list/track-list.component';
import { TrackDetailComponent } from './containers/track-detail/track-detail.component';


@NgModule({
  declarations: [TrackListComponent, TrackDetailComponent],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
