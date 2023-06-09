import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-content">
    <div className="logo-name-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
        className="logo"
      />
      <h1 className="app-name">Wave</h1>
    </div>
    <ul className="items-container">
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
