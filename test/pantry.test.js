import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry();

    it("has a stock", () => {
      expect(pantry.stock).to.eql({});
    })

    it("has a shopping list", () => {
      expect(pantry.shoppingList).to.eql({});
    })
  });

  describe("functions", () => {
    describe("stockCheck", () => {
      it("should tell you how much of the item there is", () => {
        const pantry = new Pantry();

        expect(pantry.stockCheck("Cheese")).to.eql(0);
      });
    });

    describe("restock", () => {
      it("should add the indicated amount to the indicated ingredient", () => {
        const pantry = new Pantry();

        expect(pantry.stock).to.eql({});
        expect(pantry.stockCheck("Cheese")).to.eql(0);

        pantry.restock("Cheese", 10);

        expect(pantry.stock).to.eql({ "Cheese": 10 });
        expect(pantry.stockCheck("Cheese")).to.eql(10);

        pantry.restock("Cheese", 20);

        expect(pantry.stock).to.eql({ "Cheese": 30 });
        expect(pantry.stockCheck("Cheese")).to.eql(30);
      });
    });

    describe("addToShoppingList", () => {
      it("should add all ingredients from recipe to shopping list", () => {

      });
    });
  });
});
