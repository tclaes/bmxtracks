// TrackCard.stories.ts

import { TrackSkeletonComponent } from './track-skeleton.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';

export default {
  component: TrackSkeletonComponent,
  title: 'Track Card Skeleton',
};

export const Skeleton = () => ({
  component: TrackSkeletonComponent,
  props: {
    track: {
      trackImage: 'https://via.placeholder.com/300x200',
      trackLink: 'https://www.google.com',
      trackName: 'Trackname',
      trackContent: `
        <h1>Track Content goes here</h1>
        <p>More track content</p>
`,
    },
  },
  moduleMetadata: {
    imports: [RouterTestingModule, MatButtonModule],
  },
});
