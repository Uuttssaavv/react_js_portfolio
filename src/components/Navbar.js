import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
const NavBarStyles = styled.div`
left: 0;
top: 0;
z-index: 1;
width:100%;
padding: 2rem 1rem;
background-color:#ffff;
alignment: center;
ul {
  display: inline-flex;
  margin-left: 5%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  padding: 0.5rem 0;
  text-align: center;
  li {
    display: inline-block;
    border-radius: 8px;
    transition: 0.3s ease padding;
     padding: 0.5rem 0rem;
    &:hover {
    border-radius: 8px;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1.25rem;
    }
   
  }
  a {
    display: inline-block;
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    padding: 1rem 2rem;
    color: var(--primary-color);
    outline: none; 
    alignment: bottom;
  }
  .active {
    padding: 0 0.5rem;
    border-bottom: 2px solid var(--primary-color);
  }
}  .menuIcon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    color: var(--primary-color)
    cursor: pointer;
    display: none;
    outline: none;
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .nickname{
    margin-bottom: 1rem;
    margin-left: 1rem;
    text-align: left;
    color: var(--primary-color);
  }
   @media only screen and (max-width: 768px) {
     ul{
       display: block;
     }
    position: fixed;
     padding:0px;
    .menuIcon {
      display: block;
      color: var(--primary-color)
    }
    .hide-item {
      transform: translateX(calc(100%));
      display: none;
    }
    .navItems {
    transition: .3s ease transform;
    background-color: var(--primary-color);
    padding: 1rem;
    max-width:50%;
    border-radius: 12px;
    position: absolute;
    right: 1px;
    top: 1px;
    .closeNavIcon {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      color: white;
      *{
        pointer-events: none;
      }
     
    }
    .nickname{
      display: none;
    }
    .active {
      height:5%;
      border-bottom: 2px solid white;
      alignment: right;
      padding: 0 1rem;
      margin-bottom:10px;
    }
    li {
      display: block;
      width:120px;
      height:40px;
      color: white;
    }
   
    }
   
  }
`;
export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavBarStyles>
      <div
        className="menuIcon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <h2 className="nickname"> theutsavg. </h2>

        <div className="routes">
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <li>Home</li>
          </NavLink>{" "}
          <NavLink
            to="/experience"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <li>Experience</li>
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <li>Contact</li>
          </NavLink>
        </div>
      </ul>
    </NavBarStyles>
  );
}
