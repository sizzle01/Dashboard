import React, { useState } from 'react'
import './navbar.scss'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Link } from 'react-router-dom'

const profileImage =
  'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
const profileName = 'Aliyu Babatunde'

const Navbar = () => {
  const [count, setCount] = useState(3)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <div className="logo">TransMonitor</div>
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">
            <Link to="/" style={{ textDecoration: 'none' }}>
              Support
            </Link>
          </div>
          <div className="item">
            <Link to="/" style={{ textDecoration: 'none' }}>
              FAQ
            </Link>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">{count}</div>
          </div>

          <div className="item">
            <div className="user-info">
              <p>Hello</p>
              <span className="user-name">{profileName}</span>
            </div>
            <img src={profileImage} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
