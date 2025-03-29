import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin()
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Hỗ trợ styled-components mà không cần Babel
  },
};

export default withNextIntl(nextConfig);
