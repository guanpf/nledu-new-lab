const exec = require("child_process").execSync;
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

// 删除vue 文件的cache 目录
const rimraf = require('rimraf')
let cacheDir = path.resolve(__dirname, '../node_modules/.cache');
rimraf.sync(cacheDir)

/*
 * 解析构建模块参数
 * 单一模块传 modulename=moduleA
 * 多模块传入 modulename=moduleA,moduleB,moduleC
 * */
let args = process.argv.slice(2);
let modules = [];
args.map(config => {
  let modulename = config.match(/^modulename=(\S+)$/);
  if (modulename && modulename[1]) {
    modules.push(...modulename[1].split(","));
  }
});
if (modules.length === 0) {
  console.log(`默认打包modules目录下的所有模块`);
  console.log(`如需单独构建模块可执行相应指令`);
  console.log(`例如npm run dev modulename=ETMLab,EUSMgr`);
  modules = fs.readdirSync(path.resolve(__dirname, "../src/module"));
}

/*
 * 根据模块构建动态路由文件
 * */

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

/*
 * 写入路由
 * 路径 /src/temp/dynamicRoute.js
 * */
fs.stat(path.resolve(__dirname, "../src/temp/", "requireLib.js"), err => {
  if (err) {
    mkdirp(path.resolve(__dirname, "../src/temp/"));
  }

  fs.writeFileSync(
    path.resolve(__dirname, "../src/temp/", "requireLib.js"),
    writeFileStr,
    "utf8"
  );

  // vue-cli-service build
  /*
   * 开始构建项目
   * */
  // 构建主题
  // exec("npm run build:theme", { stdio: "inherit" });
  exec("vue-cli-service build", { stdio: "inherit" });
});
