import * as PIXI from 'pixi.js'
import _ from './app.sass'
// var css = require("./app.sass");

const app = new PIXI.Application()

export default class {
  constructor(target) {
    this.target = target
  }

  run() {
    this.target.appendChild(app.view)
  }
}
