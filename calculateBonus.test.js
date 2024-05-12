const calculateBonus = require("./calculateBonus");

describe("Testing bonus calculation for bonus is equal to sum", () => {
  it("Bonus depending on two positive numbers - sum less than 50", () => {
    expect(calculateBonus(2, 20)).toBe(22);
  });
  it("Bonus depending on two equal numbers - sum less than 50", () => {
    expect(calculateBonus(22, 22)).toBe(44);
  });
  it("Bonus depending on one number being 0 - sum less than 50", () => {
    expect(calculateBonus(2, 0)).toBe(2);
  });
  it("Bonus depending on both numbers being 0 - sum less than 50", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
  it("Bonus depending on negative numbers - sum less than 50", () => {
    expect(calculateBonus(-30, -5)).toBe(-35);
  });
  it("Bonus depending on one numbers being 50 - sum equal to 50", () => {
    expect(calculateBonus(50, 0)).toBe(50);
  });
  it("Bonus depending on two equal numbers - sum equal to 50", () => {
    expect(calculateBonus(25, 25)).toBe(50);
  });
  it("Bonus depending on two different numbers - sum equal to 50", () => {
    expect(calculateBonus(15, 35)).toBe(50);
  });
});



describe("Testing bonus calculation for bonus is equal to 50", () => {
    it("Bonus depending on two positive numbers - sum more than 50", () => {
      expect(calculateBonus(350, 20)).toBe(50);
    });
    it("Bonus depending on two equal numbers - sum more than 50", () => {
      expect(calculateBonus(26, 26)).toBe(50);
    });
    it("Bonus depending on one number being 0 - sum more than 50", () => {
      expect(calculateBonus(51, 0)).toBe(50);
    });
    it("Bonus depending on both numbers being 50 - sum more than 50", () => {
      expect(calculateBonus(50, 50)).toBe(50);
    });
    it("Bonus depending on one negative number - sum more than 50", () => {
      expect(calculateBonus(-30, 80)).toBe(50);
    });
    it("Bonus depending on two different numbers - sum more to 50", () => {
      expect(calculateBonus(49, 2)).toBe(50);
    });
  });