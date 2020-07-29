const et = require("element-theme");
const fs = require("fs");
const path = require("path");
const cssWrap = require("css-wrap");
const args = process.argv.slice(2);
const themeName = args[0];
if (!themeName) {
  console.log("请输入主题名 如 npm run build:theme default");
  return;
}

const mode = process.env.NODE_ENV;
const filePath = path.resolve(__dirname, themeName + ".scss");
const outPutPath = "./src/scss/theme/" + themeName;
if (mode === "develop") {
  //watch mode without namespace
  et.watch({
    config: filePath,
    out: outPutPath
  });
} else if (mode === "production") {
  // build mode
  et.run(
    {
      browers: ["ie > 8"],
      config: filePath,
      out: outPutPath,
      minimize: true
    },
    () => {
      let selector = themeName === "default" ? "" : ".theme-" + themeName;
      let distFilePath = outPutPath + "/index.css";
      let output = cssWrap(distFilePath, {
        selector: selector
      });
      fs.writeFileSync(distFilePath, output, "utf-8");
    }
  );
}
