import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { QueryServiceService } from '../services/query-service.service';
import PrismicDOM from 'prismic-dom';
import { UtilsService } from '../services/utils.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Track } from './models/track';

const getAllTracks = gql`
  query {
    allTracks(sortBy: track_ASC) {
      edges {
        node {
          _meta {
            uid
          }
          track
          trackImage
          content
          link {
            __typename
            ... on _ExternalLink {
              url
            }
          }
          location
        }
      }
    }
  }
`;

const getAllTags = gql`
  {
    allTracks {
      edges {
        node {
          _meta {
            tags
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  // tslint:disable-next-line:variable-name
  private _tracks: BehaviorSubject<Track[]> = new BehaviorSubject([]);

  constructor(
    private dataService: QueryServiceService,
    private utilsService: UtilsService
  ) {
    this.loadInitialData();
  }

  get tracks() {
    return this._tracks.asObservable();
  }

  setState(newState) {
    this._tracks.next(newState);
  }

  getAllTracks(): Observable<Track[]> {
    return this.getData(getAllTracks);
  }

  getTrackByUid(uid): Observable<Track[]> {
    const getTrackByUid = gql`
      {
        allTracks(uid: "${uid}" ,sortBy: track_ASC) {
        edges {
          node {
            _meta {
              uid
            },
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

    return this.getData(getTrackByUid);
  }

  getAllTags() {
    return this.dataService.getTags(getAllTags);
  }

  getFilteredTracks(filters: string[]) {
    const query = gql`
      query getFilteredList($filters: [String!]) {
        allTracks(tags: $filters) {
          edges {
            node {
              _meta {
                uid
              }
              track
              trackImage
              content
              link {
                __typename
                ... on _ExternalLink {
                  url
                }
              }
              location
            }
          }
        }
      }
    `;
    return this.filterData(query, filters);
  }

  getData(query) {
    return this.dataService.getTracks(query).pipe(
      map((result) => {
        return result.map((val) => {
          return {
            uid: val.node._meta.uid,
            trackName: val.node.track[0].text,
            trackImage: val.node?.trackImage
              ? val.node.trackImage.Thumb.url
              : null,
            trackContent: val.node?.content
              ? PrismicDOM.RichText.asHtml(
                  val.node?.content,
                  this.utilsService.linkResolver,
                  this.utilsService.htmlSerializer
                )
              : null,
            trackLink: val.node?.link
              ? val.node.link.url
              : 'https://bmx-tracks.netlify.app',
          };
        });
      })
    );
  }

  filterData(query, variables) {
    return this.dataService.filterTracks(query, variables).pipe(
      map((result) => {
        return result.map((val) => {
          return {
            uid: val.node._meta.uid,
            trackName: val.node.track[0].text,
            trackImage: val.node?.trackImage
              ? val.node.trackImage.Thumb.url
              : null,
            trackContent: val.node?.content
              ? PrismicDOM.RichText.asHtml(
                  val.node?.content,
                  this.utilsService.linkResolver,
                  this.utilsService.htmlSerializer
                )
              : null,
            trackLink: val.node?.link
              ? val.node.link.url
              : 'https://bmx-tracks.netlify.app',
          };
        });
      })
    );
  }

  private loadInitialData() {
    this.getAllTracks().subscribe((tracks) => {
      this._tracks.next(tracks);
    });
  }
}
