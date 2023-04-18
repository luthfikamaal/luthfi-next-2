import Layout from '../../layouts/Layout';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const ReadPost = ({ frontMatter: { title, date, tags, excerpt, image }, mdxSource }) => {
  return (
    <>
      <Layout title={title} description={excerpt} thumbnail={`https://luthfikamal-2.vercel.app/assets/thumbnails/blog/${image}`}>
        <div className="mt-16">
          <div className="mb-4">
            <div className="mb-3">
              <h1 className="text-4xl mb-1 font-semibold text-white">{title}</h1>
              <p className="text-white mb-1">{excerpt}</p>
              <p className="text-white italic text-sm">{date}</p>
            </div>
            <hr />
            <div id="mdx" className="pt-3">
              <MDXRemote {...mdxSource} />
            </div>
            <div className="flex gap-x-2">
              {tags.map((tag) => (
                <div className="px-2 py-1 rounded-lg bg-primary text-white" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default ReadPost;
