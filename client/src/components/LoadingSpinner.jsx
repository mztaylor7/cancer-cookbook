import React from 'react';
import '../styles.scss';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {


  return (
    <LoadingWrapper>
      <Loader type="TailSpin" color="#f89500" heigh={100} width={100} />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  alignitems: center;
`

export default LoadingSpinner;