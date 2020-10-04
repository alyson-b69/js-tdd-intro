const assert = require("assert");
const Rectangle = require("../Rectangle");

// give the test suite a label using describe
describe("Rectangle", () => {
  // give the test a label using it
  it("rectangle is a square", () => {
    let rectangle1 = new Rectangle(10, 10);
    assert.strictEqual(rectangle1.isSquare(10, 10), true);
  });

  it("rectangle isn't a square", () => {
    let rectangle2 = new Rectangle(6, 7);
    assert.strictEqual(rectangle2.isSquare(6, 7), false);
  });

  it("rectangle have a good area", () => {
    let rectangle3 = new Rectangle(13, 7);
    assert.strictEqual(rectangle3.getArea(13, 7), 91);
  });

  it("rectangle have a good perimeter", () => {
    let rectangle4 = new Rectangle(13, 7);
    assert.strictEqual(rectangle4.getPerimeter(13, 7), 40);
  });
});
