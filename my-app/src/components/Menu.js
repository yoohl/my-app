import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ededed;
  ul {
    overflow:hidden;
    li {
      float:left;
      a {
        display: block;
        min-width: 95px;
        color: #333;
        line-height: 46px;
        font-size: 15px;
        font-weight: 300;
        text-align: center;
        text-decoration: none;

        &.on {
          background: #262e35;
          color: #fff;
          font-weight: 400;
        }
      }
    }
  }
`

const Menu = () => {
  
  return (
    <Nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="on">Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="on">About</NavLink></li>
        <li><NavLink to="/about/foo" activeClassName="on">About Foo</NavLink></li>
        <li><NavLink to="/join"activeClassName="on">Join</NavLink></li>
      </ul>
    </Nav>
  );
};

export default Menu;