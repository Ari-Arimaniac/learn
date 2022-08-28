import taxCalculator from '.'

describe('Clojure', (): void => {
  let calc
  beforeEach(async () => {
    calc = await taxCalculator(0, 1)
  })
  test('should return a Promise', async (): Promise<void> => {
    expect(taxCalculator(0, 0).then).toBe(Promise.resolve().then)
  })
  test('object with calc tax function', () => {
    expect(calc).toMatchObject({
      calcTax: expect.any(Function)
    })
  })
  test('should do the calculate right', () => {
    const result = calc.calcTax(10)

    expect(result.amount()).toBe(1)
    expect(result.withholdingTax()).toBe(100)
  })
})
