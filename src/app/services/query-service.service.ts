import {Injectable} from '@angular/core';
import {from} from 'rxjs';

import {PrismicLink} from 'apollo-link-prismic';
import {InMemoryCache} from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import {map} from 'rxjs/operators';
import {DocumentNode} from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class QueryServiceService {

  client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      link: PrismicLink({
        uri: 'https://bmxtracks.prismic.io/graphql',
      }),
      cache: new InMemoryCache()
    });
  }

  getAllTracks(query: DocumentNode) {
    return from(this.client.query({
      query
    })).pipe(
      map(result => result.data.allTracks.edges)
    );
  }
}
