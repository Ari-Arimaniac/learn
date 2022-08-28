import { http } from '~/mock/ajax'

/**
 * 用闭包的方式实现税的计算
 * 老师  我这闭得对吗？
 * 如果我要利用calcTaxPrice的结果继续计算的话，应该如何继续？
 * （老师我这自动格式化好像有点问题……不知道什么2个冲突了 两边对着干）
 */

async function taxCalculator (authorCd, date) {
  let taxRate = 0
  await http.get('url', { authorCd, date }).then(() => {
    taxRate = 10
  })

  return {
    calcTax (amount) {
      return {
        amount () { return amount * taxRate / 100 },
        withholdingTax () { return 100 }
      }
    }
  }
}

export default taxCalculator

// void (async () => {
//   const context = await taxCalculator(1, 1)
//   const result = context.calcTax(10)
//   const amount = result.amount()
//   const withholdingTax = result.withholdingTax()
// })()
