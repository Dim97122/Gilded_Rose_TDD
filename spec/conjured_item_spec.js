var { ConjuredItem } = require('../src/js/conjured_item.js');
var { Shop } = require('../src/js/shop.js');

describe("ConjuredItem behavior", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("Le nom d'un ConjuredItem doit contenir Conjured", function () {
    listItems.push(new ConjuredItem("Gateau", 8, 12));
    listItems.push(new ConjuredItem("Mana Cake", 9, 8));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();      expect(items[0].name).toBe("Conjured Gateau");
    expect(items[1].name).toBe("Conjured Mana Cake");
  });


  it("La qualité d'un ConjuredItem ne peut être négative", function () {
    listItems.push(new ConjuredItem("Gateau", 10, -1));
    listItems.push(new ConjuredItem("Mana Cake", 3, -2));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBe(0);
    });
  });

  it("La qualité d'un ConjuredItem ne peut être supérieure à 50", function () {
    listItems.push(new ConjuredItem("Gateau", 10, 52));
    listItems.push(new ConjuredItem("Mana Cake", 3, 58));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    items.forEach(function (testCase, id) {
      expect(items[id].quality).toBeLessThanOrEqual(50);
    });
  });

  it("La qualité d'un ConjuredItem diminue deux fois plus vite", function () {
    listItems.push(new ConjuredItem("Gateau", 8, 12));
    listItems.push(new ConjuredItem("Mana Cake", 9, 8));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();      expect(items[0].quality).toBe(10);
    expect(items[1].quality).toBe(6);
  });
});
