const exec = require("child_process").execSync;
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

// 删除vue 文件的cache 目录
const rimraf = require('rimraf')
let cacheDir = path.resolve(__dirname, '../node_modules/.cache');
rimraf.sync(cacheDir)


let args = process.argv.slice(2);
let modules = [];

args.map(config => {
  let modulename = config.match(/^modulename=(\S+)$/);
  if (modulename && modulename[1]) {
    modules.push(...modulename[1].split(","));
  }

  let platform = config.match(/^platform=(\S+)$/);

  if (platform && platform[1]) {
    // 平台名称 用于修改接口地址，以及添加部分接口默认参数
    process.env.NLEDU_PLATFORM = platform[1]
  }
});
// process.env.useMock = "false";
process.env.VUE_APP_useMock = "false";


if (args.indexOf("mock") > -1) {
  console.log("启用开发mock数据服务");
  process.env.VUE_APP_useMock = "true";
}





if (modules.length === 0) {
  console.log(`默认打包modules目录下的所有模块`);
  console.log(`如需单独构建模块可执行相应指令`);
  console.log(`例如npm run dev modulename=eduadmin,etmlab,eusmgr`);
  modules = fs.readdirSync(path.resolve(__dirname, "../src/module"));
}

let fileTemplate = fs.readFileSync(
  path.resolve(__dirname, "requireLib.js"),
  "utf8"
);
let writeFileStr = "";
let cases = "";
modules.map(module => {
  cases += `
  case '${module}':
    return import(\`@/module/${module}/\${pagePath}.vue\`);  
    `;
});

writeFileStr = fileTemplate.replace("caseplaceholder", cases);

fs.stat(path.resolve(__dirname, "../src/temp/", "requireLib.js"), err => {
  if (err) {
    mkdirp(path.resolve(__dirname, "../src/temp/"));
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../src/temp/", "requireLib.js"),
    // routerFileContext,
    writeFileStr,
    "utf8"
  );

  exec("vue-cli-service serve", { stdio: "inherit" });
});
