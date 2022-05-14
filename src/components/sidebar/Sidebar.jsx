import './sidebar.scss'
import { Link } from 'react-router-dom'
import { Icons } from '../icons'
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
            <Icons className="icon" />
            <span>All Payments</span>
          </li>
          <li>
            <Icons className="icon" />
            <span>Reconcilled Payments</span>
          </li>
          <li>
            <Icons className="icon" />
            <span>Un - Reconcilled Payments</span>
          </li>
          <li>
            <Icons className="icon" />
            <span>Manual Settlement</span>
          </li>
          <p className="menu-title">Orders</p>
          <li>
            <Icons className="icon" />
            <span>All Orders</span>
          </li>
          <li>
            <Icons className="icon" />
            <span>Reconcilled Orders </span>
          </li>
          <li>
            <Icons className="icon" />
            <span>Pending Orders</span>
          </li>

          <li>
            <Icons className="icon" />
            <span>Merchant Profile</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
