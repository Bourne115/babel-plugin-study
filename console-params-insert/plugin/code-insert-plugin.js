

const targetCalleeNames = ["log", "info", "warning", "error", "debug"]
.map((n) => `console.${n}`)

const codeInsertPlugin =  ({ types, template }, options, dirname) => {
  return {
    visitor : {
      CallExpression(path, state) {
        /**如果是新加的节点就不做处理了 */
        if (path.node.isNew) return
    
        // const { code: calleeName } = generate(path.node.callee)
        const calleeName = path.get("callee").toString()
        if (targetCalleeNames.includes(calleeName)) {
          const { line, column } = path.node.loc.start
          // path.node.arguments.unshift(
          //   types.stringLiteral(`ast-filename: (${line}, ${column})`)
          // )
          console.log('state',state)
          const newNode = template.expression(
            `console.info("${state.filename || 'unknown filename'}: (${line}, ${column})")`
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
    }
  }
}

module.exports = codeInsertPlugin