var { LegendaryItem } = require('../src/js/legendary_item.js');
var { Shop } = require('../src/js/shop.js');

describe("LegendaryItem behavior", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("La qualité d'un LegendaryItem ne peut être négative", function () {
    listItems.push(new LegendaryItem("Gateau", 10, -1));
    listItems.push(new LegendaryItem("Mana Cake", 3, -2));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBe(0);
    });
  });

  it("La qualité d'un LegendaryItem ne peut être supérieure à 50", function () {
    listItems.push(new LegendaryItem("Gateau", 10, 52));
    listItems.push(new LegendaryItem("Mana Cake", 3, 58));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBeLessThanOrEqual(50);
    });
  });

  it("La qualité d'un LegendaryItem ne bouge pas et il n'a pas de date de péremption", function () {
    listItems.push(new LegendaryItem("Gateau", 8, 12));
    listItems.push(new LegendaryItem("Mana Cake", 8, 8));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();      expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe("Infinite");
    expect(items[1].quality).toBe(8);
  });
});
