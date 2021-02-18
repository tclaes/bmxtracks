import { Injectable } from '@angular/core';
import PrismicDOM from 'prismic-dom';

const Elements = PrismicDOM.RichText.Elements;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {}

  htmlSerializer(type, element, content, children) {
    switch (type) {
      // Add a class to paragraph elements
      case Elements.paragraph:
        return '<p class="paragraph-class">' + children.join('') + '</p>';

      // Don't wrap images in a <p> tag
      case Elements.image:
        return '<img src="' + element.url + '" alt="' + element.alt + '">';

      // Add a class to hyperlinks
      case Elements.hyperlink:
        const target = element.data.target ? 'target="' + element.data.target + '" rel="noopener"' : '';
        const linkUrl = PrismicDOM.Link.url(element.data, this.linkResolver);
        return '<a class="some-link"' + target + ' href="' + linkUrl + '">' + content + '</a>';

      // Return null to stick with the default behavior for all other elements
      default:
        return null;
    }
  }

  linkResolver(doc) {
    // Pretty URLs for known types
    if (doc.type === 'blog') { return '/post/' + doc.uid; }
    if (doc.type === 'page') { return '/' + doc.uid; }
    // Fallback for other types, in case new custom types get created
    return '/doc/' + doc.id;
  }
}
