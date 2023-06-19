

const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const types = require("@babel/types")
const template = require("@babel/template").default

const sourceCode = `
    console.log('hi');

    function func() {
        console.info('hola');
    }

    export default class Person {

        say() {
            console.debug('hello');
        }

        kill() {
            console.warning('hello');
        }

        render() {
            return <div>{console.error('你好')}</div>
        }
    }
`

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
  plugins: ["jsx"],
})

// parser.parseExpression()

const targetCalleeNames = ["log", "info", "warning", "error", "debug"].map(
  (n) => `console.${n}`
)

console.log(ast)


traverse(ast, {
  CallExpression(path, state) {
    if (path.node.isNew) return

    // const { code: calleeName } = generate(path.node.callee)
    const calleeName = path.get("callee").toString()
    if (targetCalleeNames.includes(calleeName)) {
      const { line, column } = path.node.loc.start
      // path.node.arguments.unshift(
      //   types.stringLiteral(`ast-filename: (${line}, ${column})`)
      // )
      const newNode = template.expression(
        `console.info("filename: (${line}, ${column})")`
      )()
      /** 把新的节点做个标记 */
      newNode.isNew = true

      if (path.findParent((path) => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]))
        path.skip()
      } else {
        path.insertBefore(newNode)
      }
    }
  },
  FunctionDeclaration: {
    enter(path, state) {

    }
  }
})

const { code, map } = generate(ast, {
  comments: true
})

// console.log(code)
