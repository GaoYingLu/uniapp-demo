var environment = 'dev';

if (environment == 'release') {
  var config = {
    domain: "https://toupai-api.lulutv.net",
    uploaddomain:"https://upload.lulutv.com.cn"
  };
} else if (environment == 'dev') {
  var config = {
    domain: "http://local.toupai.com",
    uploaddomain: "https://dev-upload.lulutv.com.cn"
  };
} else if (environment == 'test') {
  var config = {
    domain: "https://test-toupai-api.lulutv.net",
    uploaddomain: "https://test-upload.lulutv.com.cn"
  };
} else {
  var config = {
    domain: "",
    uploaddomain: ""
  };
}

config.version = "1.0";
config.platform = "xcx";
config.environment = environment;

module.exports = config;
