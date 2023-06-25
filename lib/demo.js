class Car {
  constructor(opts) {
    this.name = opts.name
    this.wheel = opts.wheel
    this.brand = opts.name
    this.price = opts.name
    this.engineStatus = opts.engineStatus
  }

  startEngine() {
    this.engineStatus = 'open'
  }

  stopEngine() {
    this.engineStatus = 'close'
  }

  getEngineStatus() {
    return this.engineStatus
  }
}

class Benz extends Car {
  constructor(opts) {
    super(opts)
    this.autoStartAndStop()
  }

  autoStartAndStop() {
    const strategies = {
      open: this.startEngine,
      close: this.stopEngine
    }
    strategies[this.engineStatus]()
  }
}

const g500 = new Benz({
  name: 'g500',
  wheel: 4,
  brand: '梅赛德斯-奔驰',
  price: '$500000',
  engineStatus: 'close'
})

const engineStatus = g500.getEngineStatus()
console.log('engineStatus', engineStatus)

function sayHi(hi = '你好') {
  return hi
}

new Array(5).fill('{}')

async function p () {
  await new Promise((resolve, reject) => {
    resolve('done')
  })  
}