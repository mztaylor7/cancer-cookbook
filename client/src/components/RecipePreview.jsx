import React, { useState } from 'react';
import '../styles.scss';
import styled from 'styled-components';

const RecipePreview = (props) => {
  const { recipe } = props;

  return (
    <Container>
      <ImageCon>
        <ImageHolder>
          <img  src={recipe.image}/>
        </ImageHolder>
      </ImageCon>
      <Description>

      </Description>
      <Title>

      </Title>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: .5rem;
  width: calc(25% - 1rem);
`
const ImageCon = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: .5rem;
`
const Title = styled.div`

`

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
`

export default RecipePreview;