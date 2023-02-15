const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
import {mount} from "./src/main.single-spa";
module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

module.exports = {
  mount: function(){
    return mount;
  }
}
