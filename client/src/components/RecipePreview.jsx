import React, { useState } from 'react';
import '../styles.scss';
import styled from 'styled-components';

const RecipePreview = (props) => {
  const { recipe } = props;

  return (
    <Container>
      <ImageCon>
        {/* <ImageHolder> */}
          <img className={"recipePreviewImage"} src={recipe.image}/>
        {/* </ImageHolder> */}
      </ImageCon>
      <Title>
        <p>{recipe.title}</p>
      </Title>
      <Description>
        <p>{recipe.description.substring(0, 60)}</p>
      </Description>
    </Container>
  )
}


// experimenting with width: 297px; for flex to work properly
const Container = styled.div`
  position: relative;
  display: block;
  margin: .5rem;
  width: 236px;
  min-height: 400px;
`
const ImageCon = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: .5rem;
  padding-bottom: 100%;
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageHolder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 100%;
  display: block;
  object-fit: cover;
`

const Description = styled.div`
  position: relative;
  overflow: hidden;
`

export default RecipePreview;