import Layout from '../../layouts/Layout';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Blog = ({ posts }) => {
  posts.sort((a, b) => b.nomor - a.nomor);

  return (
    <>
      <Layout title={'Blog'} description={'my journey in web development: small notes along the way'} thumbnail={'https://luthfikamal-2.vercel.app/assets/thumbnails/blog.png'}>
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
              {posts.map(({ slug, title, date }) => (
                <div className="border-l-[2px] border-solid border-[#09bc8a] pl-3 text-2xl text-white" key={slug}>
                  <Link href={`/blog/${slug}`}>{title}</Link>
                  <p className="text-sm text-white">{date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      ...frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
