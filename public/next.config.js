module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // mengizinkan akses ke direktori public
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
