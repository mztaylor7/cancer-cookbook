import React, { useState } from 'react';
import '../styles.scss';

const Filter = () => {
  const [symptoms, setSymptoms] = useState([]);

  var radioButton = (radioName, index) => {
    var radioNameLower = radioName[0].toLowerCase() + radioName.substring(1);
    var noSpace;
    if (radioNameLower.indexOf(" ") !== -1) {
      noSpace = radioNameLower.replace(/\s+/g, '');
    } else {
      noSpace = radioNameLower
    }

    return(
    <label key={index}>
      <input type="checkbox" name={noSpace} value={radioName} key={index} onChange={selectionChanged} />
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
    console.log("symptoms: ", symptoms)
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