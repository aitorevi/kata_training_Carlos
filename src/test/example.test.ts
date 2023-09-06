describe("Factorize", () => {
    it("can´t factorize single digit numbers", () => {
        expect(countFactorizations(5)).toBe(0)
    })
})

// Codewars

// 123 -> 1 * 2 * 3 = 6 - descompuesto en 1 iteracion
// 99 -> 9 * 9 = 81 , 8 * 1 = 8 - descompuesto en 2 iteraciones
// 5 -> 0 iteraciones
// 

