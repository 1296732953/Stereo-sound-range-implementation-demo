/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true // 对于静态导出需要禁用图片优化
  },
  // 根据环境设置 basePath
  basePath: process.env.NODE_ENV === 'production' 
    ? '/Stereo-sound-range-implementation'
    : '',
}

module.exports = nextConfig 