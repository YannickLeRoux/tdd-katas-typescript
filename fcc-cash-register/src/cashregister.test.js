const checkCashRegister = require('./cashregister');

describe('Cash Register', () => {
  it('if cash-in-drawer is less than the change due, or if you cannot return the exact change.', () => {
    expect(checkCashRegister(19.5, 20, [
      ["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
    ])).toEqual({status: "INSUFFICIENT_FUNDS", change: []})
  });

  it('change due is equal to the amount in drawer', () => {
    expect(checkCashRegister(19.5, 20, [
      ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
    ])).toEqual({status: "CLOSED",
                 change: [
                   ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
                  ]})
  })

});