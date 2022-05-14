import './navbar.scss'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <div className="logo">TransMonitor</div>
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">Support</div>
          <div className="item">FAQ</div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <div className="user-info">
              <p>Hello</p>
              <span className="user-name">oluwaleke Ojo</span>
            </div>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
