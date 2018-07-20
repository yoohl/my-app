import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Layout = ({ children }) => (
  <div>
    <Header />
    <Nav />
    <Contents>
      { children }
    </Contents>
  </div>
);

const Contents = styled.div`
  position:absolute;
  left:250px;
  right:100px;
  bottom:0;
  top:44px;
  background:#fff;
  border-left:1px solid #ddd;
  border-right:1px solid #ddd;
  padding:20px;
`

export default Layout;