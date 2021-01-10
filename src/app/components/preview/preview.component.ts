import { Component, OnInit } from '@angular/core';
import Prismic from 'prismic-javascript';
import qs from 'qs';

const apiEndpoint = 'https://bmxtracks.cdn.prismic.io/api/v2'; // Update this with your repo name
const previewClient = Prismic.client(apiEndpoint);
let Preview;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() {
    Preview = ({history, location}) => {
      const {token, documentId} = qs.parse(location.search.slice(1));
      previewClient.getPreviewResolver(token, documentId)
        .resolve(this.linkResolver, '/')
        .then((url) => history.push(url));
    };
  }

  ngOnInit(): void {

  }

  getPreview() {
    return Preview;
  }

  linkResolver(doc) {
    if (doc.isBroken) {
      return '/not-found';
    }

    if (doc.type === 'home') {
      return '/';
    }

    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    }

    return '/not-found';
  }

}
