module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv', {
        'moduleName':'@env',
        'path':'.env',
        'blacklist':null,
        'whitelist':['API_BASE_URL'],
        'safe':false,
        'allowUndefined':true
      }]
    ],
  };
};
