// TrackCard.stories.ts

import { TrackCardComponent } from './track-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule } from '@angular/material/button';

export default {
  component: TrackCardComponent,
  title: 'Track Card',
};

export const Card = () => ({
  component: TrackCardComponent,
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
