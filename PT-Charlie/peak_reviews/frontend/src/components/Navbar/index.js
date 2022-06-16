import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbar';

const CLIENT_ID = "040c68e70e554c82b8019c801e42ba7c"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const Navbar = () => {
  return (
    <>
     <Nav>
         <NavLink to="/">
            <img src="./peak.jpg" alt="peak logo"
            width="60px" height="60px"/>
           
         </NavLink>
         <Bars/>
         <NavMenu>
             <NavLink to="/artist" activeStyle>
                 |Artists
             </NavLink>
             <NavLink to="/album" activeStyle>
                 |Albums
             </NavLink>
             <NavLink to="/albumreviews" activeStyle>
                 |Album Reviews
             </NavLink>
             <NavLink to="/signup" activeStyle>
                 |Sign-Up|
             </NavLink>
         </NavMenu>
         <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
         </NavBtn>
     </Nav>
    </>
  );
};

export default Navbar;