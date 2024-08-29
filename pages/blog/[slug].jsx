import Layout from '../../layouts/Layout';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';
import langLabels from '../../lib/lang-label.json';
import { useEffect } from 'react';

const ReadPost = ({ frontMatter: { title, date, tags, excerpt, image }, mdxSource }) => {
  const handleCopy = (e) => {
    const codeToCopy = e.target.getAttribute('data-code');

    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        // Menambahkan ikon "checklist" sebelum teks "Copied!"
        e.target.innerHTML = '<i class="bi bi-clipboard2-check-fill "></i> Copied!';

        setTimeout(() => {
          // Mengembalikan teks menjadi "Copy" dengan ikon clipboard
          e.target.innerHTML = '<i class="bi bi-clipboard "></i> Copy';
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy code:', err);
      });
  };

  useEffect(() => {
    document.querySelectorAll('.copy-button').forEach((button) => {
      button.addEventListener('click', handleCopy);
    });

    return () => {
      document.querySelectorAll('.copy-button').forEach((button) => {
        button.removeEventListener('click', handleCopy);
      });
    };
  }, []);

  return (
    <>
      <Layout title={title} description={excerpt} thumbnail={`https://luthfikamal-2.vercel.app/assets/thumbnails/blog/${image}`}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css" />
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
  const addLanguageLabel = () => (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'pre' && node.children[0].tagName === 'code') {
        const codeNode = node.children[0];
        const className = codeNode.properties.className || [];
        const langClass = className.find((cn) => cn.startsWith('language-'));
        let texts = [];
        codeNode.children.map((child) => {
          texts.push(child.value);
          if (child.children) {
            child.children.map((e) => {
              texts.push(e.value);
              if (e.children) {
                e.children.map((ee) => {
                  texts.push(ee.value);
                });
              }
            });
          }
        });
        if (langClass) {
          const langName = langClass.replace('language-', '');
          const editedLabel = langLabels.find((e) => e.original == langName);
          node.children.unshift({
            type: 'element',
            tagName: 'div',
            properties: { className: ['code-header'] },
            children: [
              {
                type: 'element',
                tagName: 'span',
                properties: { className: ['language-label'] },
                children: [{ type: 'text', value: editedLabel.edited }],
              },
              {
                type: 'element',
                tagName: 'button',
                properties: { className: ['copy-button'], dataCode: texts.join('') },
                children: [
                  {
                    type: 'element',
                    tagName: 'i',
                    properties: { className: ['bi', 'bi-clipboard'] }, // Icon for Copy
                    children: [],
                  },
                  {
                    type: 'text',
                    value: ' Copy',
                  },
                ],
              },
            ],
          });
        }
      }
    });
  };

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, addLanguageLabel],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default ReadPost;
