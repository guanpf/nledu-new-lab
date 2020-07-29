const cssParse = require("css-parse");
const cssStringify = require("css-stringify");

const processRules = function(list, options) {
  return list.map(function(r) {
    if (r.selectors) {
      r.selectors.forEach(function(s, index) {
        if (options.skip && options.skip.test(s)) return;
        var selector = options.selector ? options.selector + " " + s : s;
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
  // if (fs.existsSync(path.resolve(string))) {
  //   string = fs.readFileSync(string).toString();
  // }
  var string = buffer.toString();
  var css = cssParse(string);
  css.stylesheet.rules = processRules(css.stylesheet.rules, options);
  return cssStringify(css);
};

module.exports = cssWrap;
