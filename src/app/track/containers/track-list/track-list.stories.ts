// Tracklist.stories.ts

import { TrackListComponent } from './track-list.component';
import { TrackFiltersComponent } from './../track-filters/track-filters.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TrackCardComponent } from '../track-card/track-card.component';

export default {
  component: TrackListComponent,
  title: 'Track List',
  decorators: [
    moduleMetadata({
      declarations: [TrackCardComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Primary = () => ({
  component: TrackListComponent,
  props: {
    label: 'Button',
  },
});
