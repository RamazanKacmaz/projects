const { sum, cikarma} = require("./sum")

test ("1+2 = 3 olmalidir", () => {
    expect(sum(1,2)).toBe(3);
} )

test('5 - 3 = 2 olmalıdır', () => {
    expect(cikarma(5,3)).toBe(2)
});