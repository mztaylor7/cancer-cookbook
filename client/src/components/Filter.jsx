import React, { useState, useEffect } from 'react';
import '../styles.scss';

const Filter = ({ query, searchRecipes, setLoading }) => {
  // const { query, searchRecipes, setLoading } = props;
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    setLoading(true);
    if(query) {
      console.log('query: ', query)
      searchRecipes(`/api/recipes/filter?search=${query}&filter=${symptoms.join(' ')}`);
    }
    // console.log('query: ', query)
    // searchRecipes(`/api/recipes/filter?search=${query}`)
  }, [JSON.stringify(symptoms)])

  const symptomParser = (symptom) => {
    switch (symptom) {
      case 'Nasuea':
        return 'N';
        break;
      case 'Diarrhea':
        return 'D';
        break;
      case 'Constipation':
        return 'C';
        break;
      case 'Trouble Swallowing':
        return 'TS';
        break;
      case 'Sore Mouth':
        return 'SM';
        break;
      case 'Unintentional Weight Loss':
        return 'WL';
        break;
      case 'Taste Changes':
        return 'TC';
        break;
    }
  }

  var radioButton = (radioName, index) => {
    var radioNameLower = radioName[0].toLowerCase() + radioName.substring(1);
    var noSpace;
    var parsed = symptomParser(radioName);
    if (radioNameLower.indexOf(" ") !== -1) {
      noSpace = radioNameLower.replace(/\s+/g, '');
    } else {
      noSpace = radioNameLower;
    }

    return(
    <label key={index}>
      <input type="checkbox" name={noSpace} value={parsed} key={index} onChange={selectionChanged} />
      {radioName}
    </label>
    )
  }

  var symptomsList = ["Nasuea", "Diarrhea", "Constipation", "Trouble Swallowing", "Sore Mouth", "Unintentional Weight Loss", "Taste Changes"]

/*
  Symptoms
  Nasuea - N
  Diarrhea - D
  Constipation - C
  Trouble Swallowing - TS
  Sore Mouth - SM
  Unintentional Weight Loss - WL
  Taste Changes - TC
*/

  const selectionChanged = (e) => {
    var value = e.target.value
    setSymptoms(symptoms => {
      var index = symptoms.indexOf(value)
      if (index !== -1) {
        symptoms.splice(index, 1);
      } else {
        symptoms.push(value);
      }
      return symptoms;
    })
    console.log("symptoms: ", symptoms.join(' '))
  }

  return (
    <div className={"sortGrid"}>
      <h3>Filter</h3>
      <form>
        <label>Symptoms:</label>
        {symptomsList.map((symptom, i) => {
          return radioButton(symptom, i);
        })}
      </form>
    </div>
  )
}

export default Filter;