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
  
  a {
    display: flex;
    align-items: center;
    padding: 0 1rem;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
    }
  }
`
const UserProfile = styled.img`
  height: 70px;
  width: 70px;
  background-color: red;
  border-radius: 50%;
`

export default Header

