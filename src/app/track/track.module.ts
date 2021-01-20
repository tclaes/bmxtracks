import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackListComponent } from './containers/track-list/track-list.component';
import { TrackDetailComponent } from './containers/track-detail/track-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { TrackFiltersComponent } from './containers/track-filters/track-filters.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TrackListComponent,
    TrackDetailComponent,
    TrackFiltersComponent,
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TrackModule {}
