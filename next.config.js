/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack(config, { isServer }) {
    // ref: https://react-svgr.com/docs/webpack/
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
      resourceQuery: /url/, // *.svg?url
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/, /raw/] }, // exclude react component if *.svg?url
      loader: require.resolve('@svgr/webpack'),
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIds: false,
                },
              },
            },
          ],
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
