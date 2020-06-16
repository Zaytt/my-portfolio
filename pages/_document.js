/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/
import Document, { Head, Main, NextScript } from 'next/document';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/assets/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
