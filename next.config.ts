import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/VR-Dental-Care-Dental-Implant-Centre.",
  assetPrefix: "/VR-Dental-Care-Dental-Implant-Centre.",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
