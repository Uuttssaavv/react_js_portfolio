
import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md'
const NavBarStyles = styled.div
  `
background-color:red;
z-index:100;
top:0;
left:0;
width:100%;
padding: 1rem 0;
background: var(--dark-bg);
ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      padding: 0.5rem 1rem;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .menuIcon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .navItems .closeNavIcon {
    display: none;
  }
  
   @media only screen and (max-width: 768px) {
     padding:0px;
    .menuIcon {
      display: block;
    }
    .hide-item {
      transform: translateX(calc(100%));
    }
    .navItems {
    
    transition: .3s ease transform;
    background-color: var(--deep-dark);
    padding: 2rem;
    width: 60%;
    max-width: 250px;
    border-radius: 12px;
    position: absolute;
    right: 1px;
    top: 1px;
    .closeNavIcon {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      *{
        pointer-events: none;
      }
    }
    li {
      display: block;
      margin-bottom: 1px;
    }
    }
    
  }
`;
export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavBarStyles>
      <div className='menuIcon'
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div className='closeNavIcon'
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <NavLink to="/" exact
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <li>Home</li>
        </NavLink>
        <NavLink to="/about"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <li>About</li>
        </NavLink>
        <NavLink to="/projects"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink to="/contact"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <li>Contact</li>
        </NavLink>
      </ul>

    </NavBarStyles >

  );
};