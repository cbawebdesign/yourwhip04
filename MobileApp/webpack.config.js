const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // if (config.mode === 'development') {
    config.devServer.proxy = {
      '/**': {
        target: {
          host: 'yourwhip.herokuapp.com',
          protocol: 'https:',
          port: 11499,
        },
        secure: true,
        changeOrigin: true,
        logLevel: 'info',
      },
    };
  // }

  return config;
};
