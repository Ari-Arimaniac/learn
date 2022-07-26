/**
 * 用闭包的方式实现税的计算
 * 老师  我这闭得对吗？
 * 如果我要利用calcTaxPrict的结果继续计算的话，应该如何继续？
 * （老师我这自动格式化好像有点问题……不知道什么2个冲突了 两边对着干）
 */
function taxCalcer(authorCd, date) {
  let taxRate = 0
  this.get('url', { authorCd, date }).then(response => {
    taxRate = 10
  })
  function calcTaxPrict(amount) {
    return amount * taxRate
  }
  return {
    calcTaxPriceResult: function (amount) {
      calcTaxPrict(amount)
    }
  }
}

const result1 = taxCalcer(1, 20210726)

result1.calcTaxPriceResult(300)
