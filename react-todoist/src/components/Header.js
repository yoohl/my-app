import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    return (
      <Head>
        <inner>
        </inner>
      </Head>
    );
  }
}

const Head = styled.header`
	height:43px;
	background:#3d3d3d
`

export default Header;