// Tracklist.stories.ts

import { TrackListComponent } from './track-list.component';

export default {
  component: TrackListComponent,
  title: 'Track List',
};

export const Primary = () => ({
  component: TrackListComponent,
  props: {
    label: 'Button',
  },
});
