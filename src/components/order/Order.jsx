import React from 'react'
import './order.scss'

const Order = ({
  transactionType,
  PendingOrders,
  pendingCount,
  reconciledOrders,
  ReconciledCount,
  totalOrder,
  totalCount,
}) => {
  return (
    <div className="order-wrapper">
      <div className="order">
        <p className="order-head">{transactionType}</p>
        <div className="outer">
          <div className="inner"></div>
        </div>
        <p className="pending">
          {PendingOrders}: <span>{pendingCount}</span>
        </p>
        <p className="pending">
          {reconciledOrders}: <span>{ReconciledCount}</span>
        </p>
        <p className="pending">
          {totalOrder}: <span>{totalCount}</span>
        </p>
      </div>
    </div>
  )
}

export default Order
