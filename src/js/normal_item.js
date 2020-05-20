import {Item} from './item'

class NormalItem extends Item {
  constructor(name, sellIn, quality){
    if (quality < 0) {
      quality = 0
    }
    if (quality > 50) {
      quality = 50
    }
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn--;
    if (this.sellIn--) {
      this.quality--
    }
    if (this.sellIn <= 0) {
      this.sellIn = 0
    }
    if (this.sellIn == 0) {
      this.quality--
    }
    if (this.quality < 0) {
      this.quality = 0
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}

export { NormalItem };
