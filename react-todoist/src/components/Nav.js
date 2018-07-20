import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class Nav extends Component {
  render() {
    return (
      <Menu>
        <ul>
          <li><NavLink to="/today"activeClassName="on">오늘</NavLink></li>
          <li><NavLink to="/nextweek"activeClassName="on">다음 7일</NavLink></li>
          <li><NavLink to="/project"activeClassName="on">프로젝트</NavLink></li>
        </ul>
      </Menu>
    );
  }
}

const Menu = styled.div`
  position: relative;
  width:250px;
  background: #eee;
  ul {
    overflow:hidden;
    li {
      a {
        display: block;
        color: #333;
        line-height: 46px;
        font-size: 15px;
        font-weight: 300;
        text-align: center;
        text-decoration: none;

        &.on {
          background: #fff;
          font-weight: 400;
        }
      }
    }
  }
`

export default Nav;