import Layout from '../layouts/Layout';

const Contact = () => {
  return (
    <>
      <Layout title={'Contact'} description={'get in touch with me'} thumbnail={'https://luthfikamal-2.vercel.app/assets/thumbnails/contact.png'}>
        <div className="mt-16">
          <div className="mb-4">
            <h1 className="text-4xl mb-1 font-semibold text-white">Contact</h1>
            <p className="text-white">
              get in <span className="font-bold">touch</span> with me
            </p>
          </div>
          <hr />
        </div>
      </Layout>
    </>
  );
};

export default Contact;
