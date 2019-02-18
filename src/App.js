import * as PIXI from 'pixi.js'
import bunnyUrl from '../assets/bunny.png'

export default class {
  constructor(target, number = 1) {
    this.target = target
    this.number = number

    this.app = new PIXI.Application({backgroundColor : 0x1099bb})
    this.bunnyTex = PIXI.Texture.fromImage(bunnyUrl)
  }

  run() {
    for (let i = 0; i < this.number; i += 1) {
      let bunny = new PIXI.Sprite(this.bunnyTex)
      bunny.anchor.set(0.5)
      bunny.x = Math.floor(Math.random() * this.app.screen.width)
      bunny.y = Math.floor(Math.random() * this.app.screen.height)

      this.app.stage.addChild(bunny);
    }

    this.target.appendChild(this.app.view)
  }
}
