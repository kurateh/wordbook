/**
 * @typedef {import("@babel/core").PluginObj} PluginObj
 * @typedef {import("@babel/core").ConfigAPI} BabelApi
 * @param {BabelApi} api
 * @returns {PluginObj}
 */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo"]],
  };
};
