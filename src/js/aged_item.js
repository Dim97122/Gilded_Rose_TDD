import {Item} from './item';

class AgedItem extends Item {
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
    if (this.sellIn <= 5) {
      this.quality += 3
    } else if (this.sellIn <= 10) {
      this.quality += 2
    } else {
      if (this.sellIn--) {
        this.quality++
      }
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}

export { AgedItem };
