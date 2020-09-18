import React, { useState, useEffect } from 'react';
import '../styles.scss';

import axios from 'axios';

const Filter = ({ query, setLoading, setRecipes }) => {
  const [symptoms, setSymptoms] = useState([]);

  let cancelToken;
  const searchRecipes = async (url) => {
    if (cancelToken) {
      cancelToken.cancel("Cancelled due to new request");
    }

    cancelToken = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        cancelToken: cancelToken.token
      });
      await setLoading(false);
      setRecipes(response.data);
    } catch(err) {
      if (axios.isCancel(err)) {
        console.log('Request Cancelled', err)
      } else {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    if (query) {
      if (symptoms.length > 0) {
        searchRecipes(`/api/recipes/filter?search=${query}&filter=${symptoms.join('-')}`);
      } else {
        searchRecipes(`/api/recipes/search?search=${query}`);
      }
    }
  }, [symptoms.length])

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

  const symptomChanger = (value) => {
    var index = symptoms.indexOf(value)
      if (index !== -1) {
        symptoms.filter((e) => (e !== value));
      } else {
        [...symptoms, value];
      }
  }

  const selectionChanged = (e) => {
    var value = e.target.value
    var index = symptoms.indexOf(value)
    if (index !== -1) {
      setSymptoms(symptoms.filter((e) => (e !== value)))
    } else {
      setSymptoms([...symptoms, value])
    }
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