// vue.config.js
const devProxy = ["/api"];
const socketProxy = ["/wbskt"];
let port = 8088;
let projectList = {};
let hosturl = process.env.HOSTURL;
const uploadurl = process.env.UPLOADURL;
const socketurl = process.env.SOCKETURL;
const hcUploadUrl = process.env.HCUPLOADURL;

let proxyObj = {};
let after = () => {};
if (process.env.VUE_APP_useMock === "true") {
  port = 8089;
  hosturl = `http://192.168.133.184:3000/mock`;
  // hosturl = `http://localhost:${port}/mock`;
  // after = require("./mock/mock-server");
}
devProxy.forEach(value => {
  console.log(20,value)
  proxyObj[value] = {
    target: hosturl,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      [`^${value}`]: "/"
    }
  };
});

socketProxy.forEach(value => {
  proxyObj[value] = {
    target: socketurl,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      [`^${value}`]: "/"
    }
  };
});

proxyObj["/file"] = {
  target: uploadurl,
  changeOrigin: true,
  pathRewrite: {
    [`^/file`]: "/"
  }
};

proxyObj["/hcfile"] = {
  target: hcUploadUrl,
  changeOrigin: true,
  pathRewrite: {
    [`^/hcfile`]: "/"
  }
}

module.exports = {
  // publicPath: "/",
  lintOnSave: false,
  devServer: {
    port: port,
    open: true,
    disableHostCheck: true,
    proxy: proxyObj,
    after
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(cur|ico)$/,
          loader: 'url-loader'
        }
      ]
    }
  }
};
