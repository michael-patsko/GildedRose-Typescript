const chai = require('chai');
import { Item, GildedRose } from '../app/gilded-rose';


describe('Gilded Rose', function () {

    it('runs the golden master test', function() {
        const testItems = new GildedRose([
            new Item ('Item 1', 5, 10),
            new Item ('Item 2', 0, 8),
            new Item ('Item 3', -2, 2),
            new Item ('Item 4', 10, -4),
            new Item ('Item 5', 10, 51),
            new Item ('Aged Brie', 5, 15),
            new Item ('Aged Brie', -4, 20),
            new Item ('Aged Brie', 2, 49),
            new Item ('Aged Brie', 3, 50),
            new Item ('Sulfuras, Hand of Ragnaros', -10, 20),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 5, 10),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 3, 10),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 1, 10),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            new Item ('Backstage passes to a TAFKAL80ETC concert', -1, 10),
        ]);

        const expectedItems = new GildedRose([
            new Item ('Item 1', 4, 9),
            new Item ('Item 2', -1, 6),
            new Item ('Item 3', -3, 0),
            new Item ('Item 4', 9, -4),
            new Item ('Item 5', 9, 50),
            new Item ('Aged Brie', 4, 16),
            new Item ('Aged Brie', -5, 22),
            new Item ('Aged Brie', 1, 50),
            new Item ('Aged Brie', 2, 50),
            new Item ('Sulfuras, Hand of Ragnaros', -10, 20),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 4, 13),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 2, 13),
            new Item ('Backstage passes to a TAFKAL80ETC concert', 0, 13),
            new Item ('Backstage passes to a TAFKAL80ETC concert', -1, 0),
            new Item ('Backstage passes to a TAFKAL80ETC concert', -2, 0),
        ]);

        const updatedTestItems = testItems.updateQuality();
        chai.expect(updatedTestItems).to.eql(expectedItems.items);
    })

});