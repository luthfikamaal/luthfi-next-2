import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children, title, description }) => {
  const pageTitle = `${title} - LuthfiKamal`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
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
