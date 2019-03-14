const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Is a function", () => {
    expect(typeof wrap).to.equal("function");
  });
  it(`returns 3 lines when we input 'to be or' with maxLen of 2`, () => {
    expect(wrap("To be or", 2).split("/n").length).to.equal(3);
  });
  it(`returns 3 lines when we input 'to be or' with maxLen of 4`, () => {
    expect(wrap("To be or", 4).split("/n").length).to.equal(3);
  });
  it(`returns 2 lines when we input 'to be or' with maxLen of 5`, () => {
    expect(wrap("To be or", 5).split("/n").length).to.equal(2);
  });
  const longLine =
    "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.";
  it(`returns 4 lines when we input "${longLine}" with a maxLen of 20`, () => {
    expect(wrap(longLine, 20).split("/n").length).to.equal(4);
  });
});

describe("wrap", () => {});
