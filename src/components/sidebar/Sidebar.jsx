import './sidebar.scss'
import { Link } from 'react-router-dom'
import {
  Icons,
  Overview,
  Wallet,
  CheckedWallet,
  Unreconciled,
  Settlement,
  AllOrders,
  PendingOrders,
  ReconciledOrders,
  Merchant,
} from '../icons'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="gen-invoice">GENERATE INVOICE</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="menu-title">MAIN</p>
          <div className="menu">
            <li>
              <Overview className="icon" />
              <span>Overview</span>
            </li>
          </div>
          <p className="menu-title">Payments</p>
          <div className="menu">
            <li>
              <Wallet className="icon" />
              <span>Reconcilled Payments</span>
            </li>
          </div>
          <div className="menu">
            <li>
              <CheckedWallet className="icon" />
              <span>Un - Reconcilled Payments</span>
            </li>
          </div>
          <div className="menu">
            <li>
              <Unreconciled className="icon" />
              <span>Manual Settlement</span>
            </li>
          </div>
          <p className="menu-title">Orders</p>
          <div className="menu">
            <li>
              <Settlement className="icon" />
              <span>All Orders</span>
            </li>
          </div>
          <div className="menu">
            <li>
              <AllOrders className="icon" />
              <span>Reconcilled Orders </span>
            </li>
          </div>
          <div className="menu">
            <li>
              <PendingOrders className="icon" />
              <span>Pending Orders</span>
            </li>
          </div>
          <div className="menu">
            <li>
              <Merchant className="icon" />
              <span>Merchant Profile</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
