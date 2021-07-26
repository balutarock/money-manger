// Write your code here
import './index.css'

const TransactionItem = props => {
  const {each, deleteTheList} = props
  const {title, amount, transactionType, id} = each
  const onClickDelete = () => {
    deleteTheList(id)
  }

  return (
    <li className="li-container">
      <p className="li-title">{title}</p>
      <p className="li-title">{amount}</p>
      <p className="li-title-e">{transactionType}</p>
      <button
        type="button"
        testid="delete"
        onClick={onClickDelete}
        className="button-img"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
