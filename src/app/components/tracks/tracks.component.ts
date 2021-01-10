import {Component, OnInit} from '@angular/core';
import gql from 'graphql-tag';
import {QueryServiceService} from '../../services/query-service.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Track {
  trackName: string;
  trackImage: string;
  trackLink: string;
}

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  allTracks$: Observable<Track[]>;
  constructor( private dataService: QueryServiceService) {}

  ngOnInit() {
    const query = gql`
        {
          allTracks(sortBy: track_ASC) {
            edges {
              node {
                track,
                trackImage,
                content,
                link {
                  __typename
                  ... on _ExternalLink{
                    url
                  }
                },
                location
              }
            }
          }
        }
      `;

    this.allTracks$ = this.dataService.getAllTracks(query).pipe(
      map(result => {
        return result.map(val => {
          return {
            trackName: val.node.track[0].text,
            trackImage: (val.node?.trackImage) ? val.node.trackImage.Thumb.url : null,
            trackLink: (val.node?.link) ? val.node.link.url : 'https://bmxtracks.netlify.app'
          };
        });
      })
    );
  }
}
