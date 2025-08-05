/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/FranciscoReisIzquierdoPortfolio',
  assetPrefix: '/FranciscoReisIzquierdoPortfolio',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig