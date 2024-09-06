import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">WatchHub</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/my-list">My List</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

