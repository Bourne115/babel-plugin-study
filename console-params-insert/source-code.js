console.log('hi')

function func() {
  console.info('hola')
}

export default class Person {
  say() {
    console.debug('hello')
  }

  kill() {
    console.warning('hello')
  }

  render() {
    return <div>{console.error('你好')}</div>
  }
}
