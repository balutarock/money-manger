// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props

  let incomeAmount = 0
  const incomeList = transactionList.filter(each => {
    if (each.transactionType === 'Income') {
      incomeAmount += each.amount
    }
    return incomeAmount
  })
  console.log(incomeAmount)

  let expansesAmount = 0
  const expansisList = transactionList.filter(each => {
    if (each.transactionType === 'Expenses') {
      expansesAmount += each.amount
    }
    return expansesAmount
  })

  const balance = incomeAmount - expansesAmount

  return (
    <div className="md-bg-container">
      <div className="md-card-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-img"
        />
        <div>
          <p className="md-amount-txt">Your Balance</p>
          <p className="md-amount" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="md-card-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-img"
        />
        <div>
          <p className="md-amount-txt">Your Income</p>
          <p className="md-amount" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="md-card-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-img"
        />
        <div>
          <p className="md-amount-txt">Your Expenses</p>
          <p className="md-amount" testid="expensesAmount">
            Rs {expansesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
