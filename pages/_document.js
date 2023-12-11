import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Arte Dinamar</title>
        <meta property="og:title" content="Arte Dinamar" />
        <meta
          property="og:description"
          content="Arte dinamar, vendemos productos como bolsos para mujer, joyas y manualidades para toda ocasión."
        />
        <meta
          name="description"
          content="Arte dinamar, vendemos productos como bolsos para mujer, joyas y manualidades para toda ocasión."
        />
        <meta name="geo.placename" content="Ibague, Colombia" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
