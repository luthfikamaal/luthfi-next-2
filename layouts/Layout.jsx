import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children, title, description, thumbnail }) => {
  const pageTitle = `${title} - LuthfiKamal`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:image" itemprop="image" content={thumbnail} />
        <meta property="og:site_name" content={pageTitle} />
        <meta name="google" content="notranslate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luthfikml_" />
        <meta name="twitter:creator" content="@luthfikml_" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumbnail} />
        <meta name="twitter:image:alt" content="It's image" />
      </Head>
      <Navbar className="z-[999]" />
      <main className="px-5 py-16 mx-auto animate" style={{ maxWidth: '1100px' }}>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
