const pluginTester = require("babel-plugin-tester").default

pluginTester({
  plugin: require("../code-insert-plugin"),
  babelOptions: {
    parserOpts: {
      sourceType: "unambiguous",
      plugins: ["jsx"],
    },
  },
})
