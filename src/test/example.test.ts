function countFactorizations(number: number) {
    const digitsCount = number.toString().length
    if (digitsCount > 1) {
        const digits = number.toString().split("")
        const factorization = digits.reduce((accumulator , currentValue) => Number(accumulator) * Number(currentValue), 1)
        return 1 + countFactorizations(factorization)
    }
    return 0;
}

describe("Factorize", () => {
    it("can´t factorize single digit numbers", () => {
        expect(countFactorizations(5)).toBe(0)
    })

    it("counts factorizations for numbers with more than one digit", () => {
        expect(countFactorizations(33)).toBe(1)
        expect(countFactorizations(99)).toBe(2)
        expect(countFactorizations(992)).toBe(3)
    })
})

// Codewars

// 992 -> 9 * 9 * 2 = 162 , 1 * 6 * 2 = 12 , 1 * 2 = 2 - descompuesto en 3 iteracion
// 33 -> 3 * 3 = 9
// 99 -> 9 * 9 = 81 , 8 * 1 = 8 - descompuesto en 2 iteraciones
// 5 -> 0 iteraciones
// 

