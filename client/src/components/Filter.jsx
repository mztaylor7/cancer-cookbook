import React, { useState, useEffect } from 'react';
import '../styles.scss';

import axios from 'axios';

const Filter = ({ query, setLoading, setRecipes }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [bgColor, setbgColor] = useState(listOfSymp);

  var symptomsList = ["Nasuea", "Diarrhea", "Constipation", "Trouble Swallowing", "Sore Mouth", "Unintentional Weight Loss", "Taste Changes"];

  var symptomsListAbr = ['N', 'D', 'C', 'TS', 'SM', 'WL', 'TC'];

  const listBGColors = () => {
    var bgContainer = {};
    for (var i = 0; i < symptomsListAbr.length; i++) {
      let symptom = symptomsListAbr[i];
      bgContainer[symptom] = {
        background: 'white',
        color: 'black'
      }
    }
    return bgContainer;
  }

  var listOfSymp = listBGColors();

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
    bgColorChange(value);
    var index = symptoms.indexOf(value)
    if (index !== -1) {
      setSymptoms(symptoms.filter((event) => (event !== value)))
    } else {
      setSymptoms([...symptoms, value])
    }
    console.log("symptoms: ", symptoms)
  }

  const bgColorChange = (value) => {
    console.log('bgColor: ', bgColor);
    var stateObj = {};
    if (bgColor.value.background === 'white') {
      stateObj = {
        background: '#49b293',
        color: 'white'
      }
      var newObj = bgColor;
      newObj[value] = stateObj;
      setbgColor(newObj);
    } else if (bgColor[value].background === '#49b293') {
      stateObj = {
        background: 'white',
        color: 'black'
      }
      var newObj = bgColor;
      newObj[value] = stateObj;
      setbgColor(newObj);
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
    <label className={"filter"} key={index}>
      <input type="checkbox" name={noSpace} value={parsed} key={index} onClick={selectionChanged} />
      <label style={{cursor: "pointer"}}>{radioName}</label>
    </label>
    )
  }

  return (
    <div className={"sortGrid"}>
      <div className={"filterWrap"}>
        <div className={"filterHead"}>Filter</div>
        <form className={"filterForm"}>
          <label style={{fontSize: 'large', width: "100%"}}>Symptoms</label>
          <hr/>
          {symptomsList.map((symptom, i) => {
            return radioButton(symptom, i);
          })}
        </form>
      </div>
    </div>
  )
}

export default Filter;