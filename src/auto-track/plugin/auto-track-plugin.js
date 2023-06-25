const { declare } = require('@babel/helper-plugin-utils')
const importModule = require('@babel/helper-module-imports')

const autoTrackPlugin = declare((api, options, dirname) => {
  api.assertVersion(7)

  return {
    visitor: {
      Program: {
        enter(path, state) {
          path.traverse({
            ImportDeclaration(curPath) {
              const requirePath = curPath.get('source').node.value
              console.log('requirePath--value', requirePath)
            },
          })
        },
      },
    },
  }
})

module.exports = autoTrackPlugin
