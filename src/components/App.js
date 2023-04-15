import React, { useState } from 'react';
import styled from 'styled-components';
import InputCity from './InputCity';
import axios from 'axios';
import Weather from './Weather';


import './App.css';

const API_KEY = "YOUR_API_KEY";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;



function App() {

  const [city, updateCity]= useState();
  const [weather, updateWeather]= useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`); 

     updateWeather(response.data);
  };

  return (
  <Container>
    {weather ? (
      <Weather weather={weather}/>
      ) : (
        <InputCity updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
  </Container>
  );
}

export default App;
