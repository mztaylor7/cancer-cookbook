import React, { useState } from 'react';
import '../styles.scss';
import styled from 'styled-components';
import RecipeModal from './RecipeModal.jsx';
import useModal from './useModal.jsx';

const RecipePreview = (props) => {
  const { recipe } = props;
  const {isShowing, toggle} = useModal();

  return (
    <div className="preview-wrapper" onClick={toggle}>
      <Container>
        <ImageCon>
          <img className={"recipePreviewImage"} src={recipe.image}/>
        </ImageCon>
        <Title>
          <p>{recipe.title}</p>
        </Title>
        <Description>
          <p>{recipe.description.substring(0, 60)}</p>
        </Description>
        <RecipeModal isShowing={isShowing} hide={toggle} recipe={recipe}/>
      </Container>
    </div>
  )
}

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 400px;
  box-sizing: border-box;
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

const Description = styled.div`
  position: relative;
  overflow: hidden;
`

export default RecipePreview;