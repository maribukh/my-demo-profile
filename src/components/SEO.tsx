import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: "website" | "article";
  name?: string;
}

export default function SEO({
  title,
  description,
  type = "website",
  name = "MB Dev Academy",
}: SEOProps) {
  const siteUrl = window.location.origin;
  const image = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>
        {title} | {name}
      </title>
      <meta name="description" content={description} />

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
