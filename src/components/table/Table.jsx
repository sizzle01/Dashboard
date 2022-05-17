import React from 'react'
import './table.scss'
import Select from '../select/Select'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Table = () => {
  return (
    <div className="table">
      <div className="">
        <div className="payment">Payments</div>
        <div className="table-options">
          <div className="show-payment">
            <p>
              Showing
              <span className="payment-numb">20</span>
              out of 500 payments
            </p>
          </div>
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search Payments" />
          </div>
          <div className="select">
            <Select />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
