import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackListComponent } from './containers/track-list/track-list.component';
import { TrackDetailComponent } from './containers/track-detail/track-detail.component';
import {MatButtonModule} from '@angular/material/button';
import {TrackFiltersComponent} from './containers/track-filters/track-filters.component';


@NgModule({
  declarations: [TrackListComponent, TrackDetailComponent, TrackFiltersComponent],
    imports: [
        CommonModule,
        TrackRoutingModule,
        MatButtonModule
    ]
})
export class TrackModule { }
