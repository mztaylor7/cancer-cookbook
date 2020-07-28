import React from 'react';
import '../styles.scss';


import styled from 'styled-components';

const Header = () => {
  return (
    <div className={"headerGrid"}>
      <TitleHolder>
        <h1>Cancer Cookbook</h1>
      </TitleHolder>
    </div>
  )
}

const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f89500;
  color: #fff;
`

export default Header;