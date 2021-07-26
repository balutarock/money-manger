import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionType: transactionTypeOptions[0].optionId,
    title: '',
    amount: '',
    transactionList: [],
  }

  deleteTheList = id => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(each => each.id !== id)
    this.setState({transactionList: filteredList})
  }

  renderTheProfile = () => (
    <div className="mm-profile-container">
      <h1>Hi, Richad</h1>
      <p>
        Welcome back to your <span>Money Manager</span>
      </p>
    </div>
  )

  renderTheMoneyDetails = () => {
    const {transactionList} = this.state
    return <MoneyDetails transactionList={transactionList} />
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeType = event => {
    this.setState({transactionType: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {title, amount, transactionType} = this.state
    const type = transactionTypeOptions.find(
      each => each.optionId === transactionType,
    )
    const {displayText} = type
    let upgradeTitle = title
    if (title === '') {
      upgradeTitle = 'No Title'
    }

    const newList = {
      id: v4(),
      title: upgradeTitle,
      amount: parseInt(amount),
      transactionType: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newList],
      title: '',
      amount: '',
      transactionType: transactionTypeOptions[0].optionId,
    }))
  }

  render() {
    const {amount, title, transactionList, transactionType} = this.state
    return (
      <div className="mm-bg-container">
        <div className="mm-card-container">
          {this.renderTheProfile()}
          {this.renderTheMoneyDetails()}
          <div className="t-bg-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="f-heading">Add Transaction</h1>
              <div className="input-container">
                <label htmlFor="title" className="label">
                  Title
                </label>
                <input
                  id="title"
                  className="input"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Amount" className="label">
                  Amount
                </label>
                <input
                  id="Amount"
                  className="input"
                  placeholder="Amount"
                  value={amount}
                  onChange={this.onChangeAmount}
                />
              </div>
              <div className="input-container">
                <label htmlFor="type" className="label">
                  Type
                </label>
                <select
                  id="type"
                  className="input-select"
                  value={transactionType}
                  onChange={this.onChangeType}
                >
                  {transactionTypeOptions.map(each => (
                    <option selected key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <ul className="history-container">
              <h1 className="f-heading">History</h1>
              <div className="history-card">
                <p className="title-width">Title</p>
                <p className="title-width">Amount</p>
                <p className="title-width">Type</p>
              </div>
              {transactionList.length === 0 ? (
                <li className="empty-container">
                  <p>No Transactions History Yet</p>
                </li>
              ) : (
                transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    each={eachTransaction}
                    deleteTheList={this.deleteTheList}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
