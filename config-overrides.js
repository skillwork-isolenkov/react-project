const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    'Styles': 'src'
  })(config);

  // Add the following lines to configure the sass-loader
  const sassRule = config.module.rules.find(
      (rule) => rule.oneOf && rule.oneOf.find(
          (innerRule) => innerRule.test && innerRule.test.toString().includes('scss')
      )
  );
  const sassLoader = sassRule.oneOf.find(
      (innerRule) => innerRule.test && innerRule.test.toString().includes('scss')
  ).use.find(
      (loader) => loader.loader && loader.loader.includes('sass-loader')
  );
  sassLoader.options = {
    ...sassLoader.options,
    sassOptions: {
      includePaths: ['src']
    }
  };

  return config;
};
