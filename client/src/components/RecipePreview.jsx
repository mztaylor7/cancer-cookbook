import React, { useState } from 'react';
import '../styles.scss';
import styled from 'styled-components';
import RecipeModal from './RecipeModal.jsx';
import useModal from './useModal.jsx';

const RecipePreview = (props) => {
  const { recipe } = props;
  const {isShowing, toggle} = useModal();

  const symptomIcons = (symptom, i) => {
    var colorPicker = symptom => {
      if (symptom === 'N') {
        return '#dc0060';
      } else if (symptom === 'D') {
        return '#1b2383';
      } else if (symptom === 'C') {
        return '#f7652c';
      } else if (symptom === 'TS') {
        return '#a20282';
      } else if (symptom === 'SM') {
        return '#228eca';
      } else if (symptom === 'WL') {
        return '#81c444';
      } else if (symptom === 'TC') {
        return '#ebbb54';
      }
    }

    var divStyle = {
      color: 'white',
      backgroundColor: colorPicker(symptom),
      height: '25px',
      width: '30px',
      marginRight: '4px',
      textAlign: 'center',
      lineHeight: '25px'
    }

    return(
      <div key={i} style={divStyle}>
        {symptom}
      </div>
    )
  }

  return (
    <div className="preview-wrapper" onClick={toggle}>
      <Container>
        <ImageCon>
          <img className={"recipePreviewImage"} src={recipe.image}/>
          <div className={"recipeSymptoms"}>
            {
              recipe.symptoms.map((symptom, i) => {
                return symptomIcons(symptom, i);
              })
            }
          </div>
        </ImageCon>
        <Title>
          <p>{recipe.title}</p>
        </Title>
        <Description>
          <p style={{marginTop: '0px'}}>{recipe.description.split(' ').slice(0, 9).join(' ')}<em style={{color: '#717a82'}}> READ MORE...</em></p>
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
  height: 375px;
  box-sizing: border-box;
`
const ImageCon = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 208px;
  border-radius: 4px;
  margin-bottom: .5rem;
  // padding-bottom: 100%;
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 72px;
  font-weight: bold;
`

const Description = styled.div`
  position: relative;
  overflow: hidden;
`

export default RecipePreview;