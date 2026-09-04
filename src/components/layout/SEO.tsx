import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/blockchain"
  ogImage?: string; // absolute or root-relative path
  noIndex?: boolean;
}

const SITE_URL = "https://www.exemplo-blockchain-edu.com.br";
const SITE_NAME = "Blockchain & Bitcoin — Guia Educacional";

/**
 * Every routed page renders <SEO /> once with its own title/description,
 * so search engines and social previews see distinct, accurate metadata
 * per page instead of one generic title repeated everywhere.
 */
export default function SEO({ title, description, path, ogImage, noIndex }: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}${ogImage ?? "/og-image-default.png"}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
