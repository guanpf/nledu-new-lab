const sass = require("node-sass");
const fs = require("fs");
const path = require("path");
const cssParse = require("css-parse");
const cssStringify = require("css-stringify");

const processRules = function(list, options) {
  return list.map(function(r) {
    if (r.selectors) {
      r.selectors.forEach(function(s, index) {
        if (options.skip && options.skip.test(s)) return;
        const selector = options.selector ? options.selector + " " + s : s;
        r.selectors[index] = selector;
      });
    }
    if (r.type === "media") {
      r.rules = processRules(r.rules, options);
    }
    return r;
  });
};
const cssWrap = function(buffer, options) {
  options = Object.assign(
    {
      // Defaults
      selector: ".css-wrap",
      skip: null
    },
    options || {}
  );
  const string = buffer.toString();
  const css = cssParse(string);
  css.stylesheet.rules = processRules(css.stylesheet.rules, options);
  return cssStringify(css);
};

const themes = fs.readdirSync(path.resolve(__dirname, "./themeConfig"));

function build(index) {
  index = index || 0;
  const themeName = themes[index];
  if (!themeName) return;
  const varsFilePath = path.resolve(
    __dirname,
    "./themeConfig",
    themeName,
    "index.scss"
  );
  const distVarsFilePath = path.resolve(__dirname, "element/common/var.scss");

  fs.copyFileSync(varsFilePath, distVarsFilePath);
  console.log(`start build theme: ${themeName}`);
  sass.render(
    {
      file: path.resolve(__dirname, "./src/index.scss"),
      outputStyle: "compressed"
    },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      const cssText = result.css;
      let selector = "";
      if (themeName !== "default") {
        selector = ".theme-" + themeName;
      }
      const output = cssWrap(cssText, {
        selector
      });

      fs.writeFileSync(
        path.resolve(__dirname, "dist/", themeName + ".css"),
        output,
        "utf-8"
      );
      console.log(`theme: ${themeName} build success`);

      build(++index);
    }
  );
}
build();
