import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import '../styles/blog.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
