/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
  },
});

module.exports = nextConfig;
