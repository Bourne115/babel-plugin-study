const { transformFileSync, transformSync } = require('@babel/core')
// const parser = require('@babel/parser')
const codeInsertPlugin = require('./plugin/code-insert-plugin')
const { join } = require('path')
const { readFileSync } = require('fs')

const filename = 'code-insert-plugin.js'
const sourceCode = readFileSync(join(__dirname, './source-code.js'), 'utf8')

const { code } = transformSync(sourceCode, {
  plugins: [codeInsertPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  },
  generatorOpts: {
    comments: false
  },
  filename
})

console.log(code)
