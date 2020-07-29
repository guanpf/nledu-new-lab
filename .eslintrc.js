let config = {
  root: true,
  env: {
    node: true
  },
};
  lintExtends = ["plugin:vue/essential"];// "@vue/prettier"
  config ={
    root: true,
    env: {
      node: true
    },
    extends: lintExtends,
    rules: {
      // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };

module.exports = config
