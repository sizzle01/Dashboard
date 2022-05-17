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
          <li>
            <Overview className="icon" />
            <span>Overview</span>
          </li>
          <li>
            <Wallet className="icon" />
            <span>Reconcilled Payments</span>
          </li>
          <li>
            <CheckedWallet className="icon" />
            <span>Un - Reconcilled Payments</span>
          </li>
          <li>
            <Unreconciled className="icon" />
            <span>Manual Settlement</span>
          </li>
          <p className="menu-title">Orders</p>
          <li>
            <Settlement className="icon" />
            <span>All Orders</span>
          </li>
          <li>
            <AllOrders className="icon" />
            <span>Reconcilled Orders </span>
          </li>
          <li>
            <PendingOrders className="icon" />
            <span>Pending Orders</span>
          </li>

          <li>
            <Merchant className="icon" />
            <span>Merchant Profile</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
