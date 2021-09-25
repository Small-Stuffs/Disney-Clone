import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Nav>
      <Logo src ='./images/logo.svg'/>
      <NavMenu>
        <a>
          <img src ='./images/home-icon.svg '/>
          <span>HOME</span>
        </a>
        <a>
          <img src ='./images/search-icon.svg '/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src ='./images/watchlist-icon.svg '/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src ='./images/original-icon.svg '/>
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src ='./images/movie-icon.svg '/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src ='./images/series-icon.svg '/>
          <span>SERIES</span>
        </a>
      </NavMenu>
    <UserProfile />

    </Nav>
  )
}

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      position: relative;
      font-size: 13px;
      letter-spacing: 1.5px;
      
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px; 
        right: 0;
        height: 2px;
        background: white;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.04) 0s;
        // transition: all .25s linear;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

`
const UserProfile = styled.img`
  height: 48px;
  width: 48px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
`

export default Header

