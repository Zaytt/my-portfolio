/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <!-- Primary Meta Tags --> */}
          <meta
            name="title"
            content={`Ivan Chavez - Full Stack Web Developer using Node & React`}
          />
          <meta
            name="description"
            content="I'm a full stack web developer that focuses on building single page application using then MERN stack (MongoDB, Express, React, Node). "
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ivanchavez.dev" />
          <meta
            property="og:title"
            content={`Ivan Chavez - Full Stack Web Developer using Node & React`}
          />
          <meta
            property="og:description"
            content="I'm a full stack web developer that focuses on building single page application using then MERN stack (MongoDB, Express, React, Node). "
          />
          <meta
            property="og:image"
            content="https://ivanchavez.dev/static/assets/meta-image.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ivanchavez.dev" />
          <meta
            property="twitter:title"
            content={`Ivan Chavez - Full Stack Web Developer using Node & React`}
          />
          <meta
            property="twitter:description"
            content="I'm a full stack web developer that focuses on building single page application using then MERN stack (MongoDB, Express, React, Node). "
          />
          <meta
            property="twitter:image"
            content="https://ivanchavez.dev/static/assets/meta-image.png"
          />

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
