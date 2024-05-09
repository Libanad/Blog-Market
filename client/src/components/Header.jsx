import React, { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu } from 'react-icons/fi'; // Import the dropdown and hamburger icons from FontAwesome

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming user is not logged in initially
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
  };

  const titleStyle = {
    flex: 1,
  };

  const titleLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  const titleTextStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const moonIconStyle = {
    fontSize: '20px',
    color: 'white',
    marginRight: '10px',
  };

  const signupButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const dropdownIconStyle = {
    fontSize: '24px',
    color: 'white',
    cursor: 'pointer',
  };

  const dropdownContainerStyle = {
    position: 'relative', // Set position to relative for dropdown positioning
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%', // Position dropdown below the button
    right: 0, // Align dropdown to the right side of the button
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    display: showDropdown ? 'block' : 'none', // Show dropdown based on state
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div style={headerStyle}>
      <div style={titleStyle}>
        <Link to="/" style={titleLinkStyle}>
          <span style={titleTextStyle}>
            Blog Market
          </span>
        </Link>
      </div>
      <div style={buttonContainerStyle}>
        <FaMoon style={moonIconStyle} /> {/* Add the moon icon */}
        <Link to='Signup' style={titleLinkStyle}>
          <button style={signupButtonStyle}>
            Signup
          </button>
        </Link>
        <div style={dropdownContainerStyle}>
          <FiMenu style={{ ...dropdownIconStyle, marginLeft: '10px' }} onClick={handleDropdownToggle} /> {/* Add the hamburger icon */}
          <div style={dropdownStyle}>
            {/* Dropdown menu content */}
            <Link to="/profile" style={{ ...titleLinkStyle, display: 'block', marginBottom: '5px' }}>
              Profile
            </Link>
            <Link to="/settings" style={{ ...titleLinkStyle, display: 'block', marginBottom: '5px' }}>
              Settings
            </Link>
            <Link to="/logout" style={{ ...titleLinkStyle, display: 'block' }}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
