import taxCalculator from '.'
void (async () => {
  const context = await taxCalculator(1, 1)
  const result = context.calcTax(10)
  const amount = result.amount()
  const withholdingTax = result.withholdingTax()
  console.log({ amount, withholdingTax })
})()
