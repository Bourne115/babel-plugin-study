# babel 插件学习
## babel是什么

## babel的API

## 如何编写一个babel插件


## JS Parser 的历史
- 基于 `C++`编写的JS引擎：`SpiderMonkey`,具备早期的`AST标准`
- 基于 `SpiderMonkey`编写的JS引擎：`Esprima`,形成`Estree标准`
- 基于 `Esprima`编写的Js引擎：`Espree`,继续使用`Estree标准`
- 基于 `Estree标准`编写的Js引擎：`Acorn`,可通过插件拓展语法支持
- 基于 `Acorn`编写的Js引擎：`Babylon`，继承上者并对`AST`的节点与属性做了拓展
- `Babylon` 在 babel 7+ 版本后 变成了 `@babel/parser`

1、有一个基于c++的js引擎，叫spiderMonkey，它对执行js有自己一套api、以及ast标准；
2、后来，有个小兄弟基于spiderMonkey的标准实现了一个解析器（parser）叫esprima； 
3、随着es发展，ast的标准也在发展，于是基于spiderMonkey的ast，慢慢形成了标准的estree规范定义 
4、同时，因为es的快速发展esprima开始力不从心，更不上迭代；社区其他团队比如eslint为了满足需求，基于esprima开发了espree解析器 
5、社区不断发展，迎来新的parser acorn，由于速度快，插件机制支持，收到开发者们的拥趸


## babel 转译的过程 parse -> transform -> generate
1. 解析 - parse 阶段有@babel/parser，功能是把源码转成 AST
2. transform 阶段有 @babel/traverse，可以遍历 AST，并调用 visitor 函数修改 AST，修改 AST 自然涉及到 AST 的判断、创建、修改等，这时候就需要 @babel/types 了，当需要批量创建 AST 的时候可以使用 @babel/template 来简化 AST 创建逻辑。
3. generate 阶段会把 AST 打印为目标代码字符串，同时生成 sourcemap，需要 @babel/generator 包
中途遇到错误想打印代码位置的时候，使用 @babel/code-frame 包
babel 的整体功能通过 @babel/core 提供，基于上面的包完成 babel 整体的编译流程，并应用 plugin 和 preset。
