import * as PIXI from 'pixi.js'

const app = new PIXI.Application()

export default class {
  constructor(target) {
    this.target = target
  }

  run() {
    this.target.appendChild(app.view)
  }
}
