import Layout from '../layouts/Layout';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Layout title={'Web Development Enthusiast'} description={'a web development enthusiast who loves coffee, coding, and math'} thumbnail={'/assets/thumbnails/home.png'}>
        <div className="pt-16 mb-9">
          <span className="text-white">hi!</span>
          <h1 className="text-5xl mb-1 text-white font-bold">
            I'm <span className="text-primary">Luthfi Kamal.</span>
          </h1>
          <p className="text-white">
            a <span className="font-semibold">web development enthusiast</span> who loves coffee, coding, and math.
          </p>
        </div>
        <div className="flex items-center gap-x-5">
          <Link href={'/contact'} className="px-4 py-3 rounded-xl bg-primary text-white transition-all">
            Contact me
          </Link>
          <span className="flex items-center text-white gap-x-2">
            <i className="bi bi-circle-fill text-sm"></i>
            Open to work
          </span>
        </div>
      </Layout>
    </>
  );
};

export default Home;
