import {Item} from './item'

class LegendaryItem extends Item {
  constructor(name, sellIn, quality){
    if (quality < 0) {
      quality = 0
    }
    if (quality > 50) {
      quality = 50
    }
    super(name, sellIn = "Infinite", quality)
  }

  updateQuality() {

  }
}

export { LegendaryItem };
