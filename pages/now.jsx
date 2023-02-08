import Layout from '../layouts/Layout';
import Link from 'next/link';

const Now = () => {
  return (
    <>
      <Layout title={'Now'} description={"what i'm doing now"} thumbnail={'/assets/thumbnails/now.png'}>
        <div className="mt-16">
          <div className="mb-4">
            <h1 className="text-4xl mb-1 font-semibold text-white">Now</h1>
            <p className="text-white">
              what i'm doing <span className="font-semibold">now</span>
            </p>
          </div>
          <hr />
          <div className="mb-3 pt-3 text-white">
            <div className=" mb-6">
              Terinspirasi dari mas{' '}
              <a href="https://www.wahudamon.com/" target="_blank" className="text-primary underline transition-all">
                Afwa Bagas Wahuda
              </a>{' '}
              dan mas{' '}
              <a href="https://gading.dev/id/now" className="text-primary underline transition-all" target="_blank">
                Sutan Gading Fadhillah Nasution
              </a>
              . Halaman ini dibuat untuk menjelaskan <b>apa saja kesibukannya sekarang?</b>
            </div>
            <div className=" mb-6">
              <h1 className="font-poppins mb-3 text-2xl">☕️ Aktivitas</h1>
              <div className="font-serif">
                <p>Sedang menempuh pendidikan S-1 Matematika UIN Sunan Kalijaga. Selain itu, saya juga melakukan beberapa aktivitas, seperti</p>
                <ul>
                  <li>
                    - mempelajari teknologi di internet, terutama di bidang <i>Web Development</i>,
                  </li>
                  <li>- membaca buku,</li>
                  <li>
                    - menulis{' '}
                    <Link href={'/posts'} className="text-primary underline transition-all">
                      blog
                    </Link>
                    , dan
                  </li>
                  <li>
                    - tentunya <i>ngoding</i>.
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mb-6">
              <h1 className="font-poppins mb-3 text-2xl">📘 Buku yang dibaca</h1>
              <div className="font-serif">
                <ul>
                  <li>
                    -{' '}
                    <a href="https://www.google.com/search?q=Sebuah+Seni+Berpikir+Positif" target="_blank" className="text-primary hover:underline">
                      Sebuah Seni Berpikir Positif
                    </a>{' '}
                    karya Irfan Suryana.
                  </li>
                  <li>
                    -{' '}
                    <a href="https://www.google.com/search?q=Out of The Lunch Box" target="_blank" className="text-primary hover:underline">
                      Out of The Lunch Box
                    </a>{' '}
                    karya Iqbal Aji Daryono.
                  </li>
                  <li>
                    -{' '}
                    <a href="https://www.google.com/search?q=Kitab+Anti+Bodoh" target="_blank" className="text-primary hover:underline">
                      Kitab Anti Bodoh
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" mb-6">
              <h1 className="font-poppins mb-3 text-2xl">💡 Teknologi yang digunakan</h1>
              <div className="font-serif">
                <ul>
                  <li>- Javascript dan PHP</li>
                  <li>- Laravel, NodeJS, ReactJS/NextJS, Express.js</li>
                  <li>- TailwindCSS, Chakra UI, etc</li>
                </ul>
              </div>
            </div>
            <div className=" mb-6">
              <h1 className="font-poppins mb-3 text-2xl">
                🛠 <i>Software</i> yang digunakan
              </h1>
              <div className="font-serif">
                <ul>
                  <li>
                    - <b>Sistem Operasi</b>: Windows 10
                  </li>
                  <li>
                    - <b>Kode Editor</b>: Visual Studio Code
                  </li>
                  <li>
                    - <b>Peramban</b>: Google Chrome dan Edge
                  </li>
                  <li>
                    - <b>Lain-lain</b>: Git, Postman, XAMPP, Node, dan Composer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Now;
