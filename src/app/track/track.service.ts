import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {QueryServiceService} from '../services/query-service.service';
import PrismicDOM from 'prismic-dom';
import {UtilsService} from '../services/utils.service';
import {Observable} from 'rxjs';
import {Track} from './models/track';

const getAllTracks = gql`
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

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private dataService: QueryServiceService, private utilsService: UtilsService){}

  getAllTracks(): Observable<Track[]> {
    return this.dataService.getAllTracks(getAllTracks).pipe(
      map(result => {
        return result.map(val => {
          return {
            trackName: val.node.track[0].text,
            trackImage: (val.node?.trackImage) ? val.node.trackImage.Thumb.url : null,
            trackContent: (val.node?.content)
              ? PrismicDOM.RichText.asHtml(val.node?.content, this.utilsService.linkResolver, this.utilsService.htmlSerializer)
              : null,
            trackLink: (val.node?.link) ? val.node.link.url : 'https://bmx-tracks.netlify.app'
          };
        });
      })
    );
  }
}
