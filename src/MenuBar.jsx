import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn"><i className="fas fa-bars"></i></label>
      <div className="wrapper">
        <ul>

          <Link to="/home"> <li><a href="#">Home</a></li> </Link>
          {/* <Link to="/myspace"> <li><a href="#">My-Space</a></li> </Link> */}
          <Link to="/spaces"> <li><a href="#">Spaces</a></li> </Link>
          <Link to="/bill"> <li><a href="#">Bill</a></li></Link>
          <Link to="/bedroom"> <li><a href="#">bedroom</a></li></Link>
          <Link to=""> <li><a href="#">Setting</a></li></Link>

          {/* <Link to="/home">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/spaces">
          <MenuItem>Spaces</MenuItem>
        </Link>
        <Link to="/bedroom">
          <MenuItem>Bedroom</MenuItem>
        </Link>
        <Link to="/bill">
          <MenuItem> Bill</MenuItem>
        </Link>
        <Link to="/myspace">
          <MenuItem >My Spaces</MenuItem>
        </Link> */}
        </ul>
      </div>
      {/* <div class="content">
        <div class="title">
          Fullscreen Overlay Navigation Bar
        </div>
        <p>
          using only HTML & CSS
        </p>
      </div> */}
    </>
  );
};

export default MenuBar;