import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const router = useRouter();

  const showNavModal = () => {
    setIsShow(isShow ? false : true);
  };

  useEffect(() => {
    setIsShow(false);
  }, [router]);
  return (
    <>
      <nav className="fixed z-[1000] w-full px-5 py-4 border-b border-solid border-green-700 top-0 bg-secondary flex">
        <Link href={'/'} id="nav-title" className="flex items-center gap-x-3 mr-8">
          <span className="text-xl px-3 py-1 rounded-xl bg-primary text-white font-semibold">
            <span className="md:hidden">L.</span>
            <span className="hidden md:block">Luthfi.</span>
          </span>
        </Link>
        <ul id="nav-links" className="hidden sm:flex items-center gap-x-5">
          <li>
            <Link className="text-primary text-sm font-semibold" href={'/now'}>
              Now
            </Link>
          </li>
          <li>
            <Link className="text-primary text-sm font-semibold" href={'/projects'}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-primary text-sm font-semibold" href={'/blog'}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-primary text-sm font-semibold" href={'/contact'}>
              Contact
            </Link>
          </li>
        </ul>
        <ul className="ml-auto flex items-center gap-x-1">
          <li>
            <a href="https://twitter.com/luthfikml_" target={'_blank'} className="px-3 py-2 rounded-lg hover:bg-white/10">
              <i className="bi bi-twitter text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/luthfikamaal" className="px-3 py-2 rounded-lg hover:bg-white/10" target={'_blank'}>
              <i className="bi bi-github text-white"></i>
            </a>
          </li>
          <li>
            <button onClick={showNavModal} className="block sm:hidden px-3 py-2 rounded-lg hover:bg-white/10">
              <i className="bi bi-list text-white"></i>
            </button>
          </li>
        </ul>
      </nav>
      {isShow && (
        <div className={isShow ? 'h-screen fixed z-[1001] bg-secondary w-full backdrop-blur-md animation-open-modal' : 'h-screen fixed z-[1001] bg-secondary w-full backdrop-blur-md animation-close-modal'}>
          <div className="px-5 py-4 flex">
            <button className="ml-auto px-3 py-2 rounded-lg hover:bg-white/10" onClick={showNavModal}>
              <i className="bi bi-x-circle-fill text-white"></i>
            </button>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-1 gap-4">
              <Link href={'/now'} className="border border-solid rounded-xl flex px-6 py-5 border-[#09bc8a] hover:bg-primary">
                <div>
                  <h1 className="text-center text-xl text-white">Now</h1>
                </div>
              </Link>
              <Link href={'/projects'} className="border border-solid rounded-xl flex px-6 py-5 border-[#09bc8a] hover:bg-primary">
                <div>
                  <h1 className="text-center text-xl text-white">Projects</h1>
                </div>
              </Link>
              <Link href={'/blog'} className="border border-solid rounded-xl flex px-6 py-5 border-[#09bc8a] hover:bg-primary">
                <div>
                  <h1 className="text-center text-xl text-white">Blog</h1>
                </div>
              </Link>
              <Link href={'/contact'} className="border border-solid rounded-xl flex px-6 py-5 border-[#09bc8a] hover:bg-primary">
                <div>
                  <h1 className="text-center text-xl text-white">Contact</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
