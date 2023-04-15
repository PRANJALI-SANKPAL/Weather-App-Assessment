import React from "react";
import styled from "styled-components";
import "./App.css";



const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`;

const ColoredLine = styled.hr`
  color: rgb(128, 128, 128);
  width: 100%;
`;

const LineText = styled.span`
  margin: 0 10px;
  font-size: 14px;
  color: rgb(128, 128, 128);
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: #47B5FF;
    font-size: 14px;
    padding: 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const sec = styled.button`
    height: 25px;
`;
const AppTitle = styled.span`
  color: #47B5FF;
  font-size: 18px;
  font-weight: bold;
`;



const InputCity =(props)=>{
  
  const { updateCity, fetchWeather } = props;

  // const handleLocationClick = () => {
  //   console.log("Called");
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;
  //       navigator.geolocation.getCurrentPosition(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const city = data.name;
  //           updateCity(city);
  //           fetchWeather();
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

    return (
        <>
        <AppTitle>Weather App</AppTitle>
            <ColoredLine />
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="Enter City Name" onChange={(e)=>updateCity(e.target.value)} />
                <button type="submit">Search</button>
            </SearchBox>
            <LineWrapper>
                <ColoredLine />
                <LineText>OR</LineText>
                <ColoredLine />
            </LineWrapper>
            <SearchBox>
            <button>Get Device Location</button>
             </SearchBox>

        </>
    );
}

export default InputCity;