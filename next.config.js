/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/Portfolio/' : '',
  basePath: isGithubPages ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
