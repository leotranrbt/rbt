import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? '/rbt' : '',
  basePath: isProd ? '/rbt' : '',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
