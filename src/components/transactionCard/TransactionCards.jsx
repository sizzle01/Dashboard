import React from 'react'
import './transactionCards.scss'

const TransactionCards = ({ description, amount }) => {
  return (
    <div className="card-wrapper">
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <p className="desc">{description}</p>
            <span className="amount">{amount}</span>
          </div>
          <div className="card-icon">
            <img src="./images/smallchart.png" alt="small Chart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionCards
