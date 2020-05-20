var { AgedItem } = require('../src/js/aged_item.js');
var { Shop } = require('../src/js/shop.js');

describe("AgedItem behavior", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("La qualité d'un AgedItem ne peut être négative", function () {
    listItems.push(new AgedItem("Gateau", 10, -1));
    listItems.push(new AgedItem("Mana Cake", 3, 3));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBeGreaterThanOrEqual(0);
    });
  });

  it("La qualité d'un AgedItem ne peut être supérieure à 50", function () {
    listItems.push(new AgedItem("Gateau", 10, 52));
    listItems.push(new AgedItem("Aged Brie", 3, 49));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBeLessThanOrEqual(50);
    });
  });

  it("La qualité d'un AgedItem augmente par 3 s'il reste 5 jours ou moins", function () {
    listItems.push(new AgedItem("Gateau", 10, 23));
    listItems.push(new AgedItem("Aged Brie", 3, 4));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(25);
    expect(items[1].quality).toBe(7);
  });
});
