import Head from "next/head";

export interface MetaProps {
  title: string;
  description: string;
  image?: string;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.image ? <meta property="og:image" content={props.image} /> : null}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      {props.image ? (
        <meta property="twitter:image" content={props.image} />
      ) : null}
    </Head>
  );
}
