import Head from "next/head";

const DEFAULT_TITLE = "코딩 부트캠프";

export default function Meta({ title = DEFAULT_TITLE }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />

        <title>{`${title} | 바코더클럽`}</title>

        <link rel="shortcut icon" href="/Favicon.png" type="image/x-icon" />
      </Head>
    </>
  );
}
