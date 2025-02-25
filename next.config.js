/** @type {import('next').NextConfig} */


const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    },
  },
  typescript: {
    ignoreBuildErrors: false, // 忽略 TypeScript 错误
  },
  eslint: {
    dirs: ['pages', 'utils', 'components'], // 仅在这些目录中运行 ESLint
  }
};

module.exports = nextConfig
