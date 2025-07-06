import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})(nextConfig);
