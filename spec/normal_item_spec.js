var { NormalItem } = require('../src/js/normal_item.js');
var { Shop } = require('../src/js/shop.js');

describe("NormalItem behavior", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("La qualité d'un NormalItem ne peut être négative", function () {
    listItems.push(new NormalItem("Gateau", 10, -1));
    listItems.push(new NormalItem("Mana Cake", 3, -2));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBe(0);
    });
  });

  it("La qualité d'un NormalItem ne peut être supérieure à 50", function () {
    listItems.push(new NormalItem("Gateau", 10, 52));
    listItems.push(new NormalItem("Mana Cake", 3, 58));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBeLessThanOrEqual(50);
    });
  });

  it("La qualité d'un NormalItem diminue deux fois plus vite si la date de péremption est atteinte", function () {
    listItems.push(new NormalItem("Gateau", 0, 12));
    listItems.push(new NormalItem("Mana Cake", 0, 8));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();      expect(items[0].quality).toBe(10);
    expect(items[1].quality).toBe(6);
  });
});
