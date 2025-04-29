import Head from "next/head";
import PropTypes from "prop-types";

function SEO({ title, desc, route }) {
  const baseUrl = "https://www.oheroofing.com/";
  const keywords =
    "Ohio roofing contractors ,Economic roofing solutions in Ohio,Affordable roofing services Ohio, Reliable roofing solutions Ohio, Ohio roofing specialists, Cost-effective roofing options Ohio , Professional roofing contractors Ohio , Top-rated Ohio roofing company , Ohio roofing experts, Budget-friendly roofing solutions Ohio";
  const description =
    "We are your trusted, local, woman-owned roofing company here in southern Ohio. We proudly serve Vandalia, Dayton, Huber Heights, Fairfield, Mason, and the surrounding area. We offer roof replacements and roof repairs for homes and businesses at competitive prices. We have a long-proven track record of excellence in customer service, and we stand behind all of our work in writing.";
  const ogImage = {
    url: "/img/cover-l3.png",
    alt: "dummy - image",
  };

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={desc || description} />
      <link rel="canonical" href={`${baseUrl}${route}`} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${route}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc || description} />
      <meta property="og:image" content={ogImage.url} />
      <meta property="og:image:alt" content={ogImage.alt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={baseUrl} />

      <meta name="application-name" content={baseUrl} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ohio Roofing" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
export default SEO;
