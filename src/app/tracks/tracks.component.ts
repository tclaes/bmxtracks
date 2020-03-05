import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { first, concatAll, share } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  beers$: Observable<any>;

  constructor(
    private title: Title,
    private meta: Meta,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const api = this.http.get('https://api.punkapi.com/v2/beers/random');
    this.beers$ = api.pipe(
      share(),
      concatAll(),
      first());
    this.beers$.subscribe( beer => {
      this.meta.updateTag({ property: 'og:title', content: beer.name });
    });

    this.title.setTitle('PMC Cycling');

    this.meta.addTags([
      { property: 'twitter:card', content: 'summary'},
      { property: 'og:url', content: '/tracks'},
    ]);
  }
}
