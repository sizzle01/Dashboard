import React from 'react'
import { smallChart } from '../icons'

const TransacctionCards = () => {
  return (
    <div className="card-wrapper">
      <div className="cards">
        <div className="card">
          <div className="">
            <p className="desc">Daily Transaction Volume</p>
            <span className="amount">2,342</span>
          </div>
          <div className="card-icon">
            <smallChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransacctionCards
