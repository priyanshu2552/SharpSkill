import React, { useState, useContext } from 'react';
import './styles/header.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [menu, setmenu] = useState(true);
  const { user } = useContext(UserContext);
  console.log(user);
  const handleClick = () => {
    setmenu(!menu);
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
      <header className="header_u">
        <div className='header-main'>
          <Link to="/" className="logo_u">
            <img src={logo} alt="SharpSkill Logo" />
          </Link>
          {window.innerWidth < 768 && <div className="menu-icon_u" onClick={() => handleClick()}>
            <VscThreeBars />
          </div>}
        </div>
        {menu &&
          <div className='menu'>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/accomodation">Accommodations</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/services">Services</Link>
              <Link to="/reviews">Reviews</Link>
            </nav>
            <div className="auth-buttons_u">
              {user &&
                <div className='logout'>
                  <h2>Hi, {user?.userName}</h2>
                  <button onClick={handleLogout} className="profile_u">Logout</button>
                </div>
              }
              {!user &&
                <div>
                  <Link to="/signin"><button className="sign-in_u">Sign In</button></Link>
                  <Link to="/signup"><button className="sign-up_u">Sign Up</button></Link>
                </div>}
            </div>
          </div>
        }
      </header>
    </>
  );
}

export default Header;
