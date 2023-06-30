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
        <meta name="keywords" content="muhammad luthfi kamal, luthfi, kamal, luthfik, luthfikamal, luthfikamal-2, frontend, backend, developer, web developer" />
        <meta name="robots" content="index, follow" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="LuthfiKamal" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luthfikamal-2.vercel.app/" />
        <meta property="og:image" itemprop="image" content={thumbnail} />
        <meta property="og:site_name" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={pageTitle} />
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
