import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="img-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-img"
          />
        </Link>
        <Popup
          trigger={
            <button
              data-testid="hamburgerIconButton"
              type="button"
              aria-label="hamburger menu"
              className="hamburger-menu"
            >
              <GiHamburgerMenu />
            </button>
          }
          modal
        >
          {close => (
            <div className="modal-container">
              <div className="modal-btn-container">
                <button
                  data-testid="closeButton"
                  type="button"
                  aria-label="close button"
                  className="close close-button"
                  onClick={close}
                >
                  <IoMdClose />
                </button>
              </div>
              <ul className="navigation-card">
                <li>
                  <Link to="/" className="navigation-links">
                    <AiFillHome className="icons" />
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navigation-links">
                    <BsInfoCircleFill className="icons" />
                    <h1>about</h1>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </nav>
    )
  }
}

export default Header
