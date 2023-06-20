const { codeFrameColumns } = require('@babel/code-frame')

const sourceCode = `
   const a = 1 + 2;
   console.log(a);
`

const res = codeFrameColumns(
  sourceCode,
  {
    start: { line: 2, column: 6 }
    // end: { line: 3, column: 5 },
  },
  {
    highlightCode: true,
    message: '此处有问题',
    forceColor: true
  }
)

console.log(res)
