/**
 * @description babel plugin 的开发方式
 * @description 函数返回一个对象的格式, 对象里有 visitor、pre、post、inherits、manipulateOptions 等属性。
 * @param {*} api  里包含了各种 babel 的 api，比如 types、template 等，这些包就不用在插件里单独单独引入了，直接取来用就行。
 * @param {*} opts  options 就是外面传入的参数
 * @param {*} dirname  dirname 是目录名（不常用）
 */

export default function (api, opts, dirname) {
  return {
    inherits: parentPlugin
  }
}
