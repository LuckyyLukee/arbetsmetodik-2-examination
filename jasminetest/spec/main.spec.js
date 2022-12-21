describe('calcMoms function', () => {
  it('Räkna ut priset + moms', () => {
    const sum = 100;
    const moms = 1.25;
    const result = calcMoms(sum, moms);
    expect(result).toEqual(125);
  });
});