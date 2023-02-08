import Layout from '../../layouts/Layout';
import posts from '../../data/posts.json';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <Layout title={'Blog'} description={'my journey in web development: small notes along the way'} thumbnail={'/assets/thumbnails/blog.png'}>
        <div className="mt-16">
          <div className="mb-4">
            <h1 className="text-4xl mb-1 font-semibold text-white">Blog</h1>
            <p className="text-white">
              my journey in <span className="font-semibold">web development</span>: small notes along the way
            </p>
          </div>
          <hr />
          <div className="mb-3 pt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5">
              {posts.map(({ id, title, author, date }) => (
                <div className="border-l-[2px] border-solid border-[#09bc8a] pl-3 text-2xl text-white" key={id}>
                  <Link href={`/blog/${id}`}>{title}</Link>
                  <p className="text-sm text-white">
                    {author} - {date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
