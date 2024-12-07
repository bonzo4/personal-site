import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/personal-site",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
