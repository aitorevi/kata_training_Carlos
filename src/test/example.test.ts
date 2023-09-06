function countFactorizations(number: number) {
    const digitsCount = number.toString().length
    if (digitsCount > 1) {
        const transformNumberToString = number.toString()
        const result = Number(transformNumberToString[0]) * Number(transformNumberToString[1])
        return 1 + countFactorizations(result)
    }
    return 0;
}

describe("Factorize", () => {
    it("can´t factorize single digit numbers", () => {
        expect(countFactorizations(5)).toBe(0)
    })

    it("counts factorizations for numbers with more than one digit", () => {
        expect(countFactorizations(33)).toBe(1)
    })
})

// Codewars

// 123 -> 1 * 2 * 3 = 6 - descompuesto en 1 iteracion
// 33 -> 3 * 3 = 9
// 99 -> 9 * 9 = 81 , 8 * 1 = 8 - descompuesto en 2 iteraciones
// 5 -> 0 iteraciones
// 

