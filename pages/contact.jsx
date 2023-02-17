import Layout from '../layouts/Layout';

const Contact = () => {
  return (
    <>
      <Layout title={'Contact'} description={"let's get in touch with me"} thumbnail={'https://luthfikamal-2.vercel.app/assets/thumbnails/contact.png'}>
        <div className="mt-16">
          <div className="mb-4">
            <h1 className="text-4xl mb-1 font-semibold text-white">Contact</h1>
            <p className="text-white">
              let's get in <span className="font-bold">touch</span> with me
            </p>
          </div>
          <hr />
          <div className="mb-3 pt-3">
            <div className="mb-6 text-white">
              <div className="mb-3">
                <table className="w-auto text-left">
                  <thead>
                    <tr>
                      <th width="120">Contact</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>
                        <a href="mailto:luthfikamal13@gmail.com" className="underline">
                          luthfikamal13@gmail.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <table className="w-auto text-left">
                <thead>
                  <tr>
                    <th width="120">Social Media</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Instagram</td>
                    <td>
                      <a href="https://instagram.com/luthfikml_" className="underline" target={'_blank'}>
                        luthfikml_
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>
                      <a href="https://twitter.com/luthfikml_" className="underline" target={'_blank'}>
                        luthfikml_
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>LinkedIn</td>
                    <td>
                      <a href="https://linkedin.com/in/luthfikamaal" className="underline" target={'_blank'}>
                        Muhammad Luthfi Kamal
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
