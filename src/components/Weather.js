import styled from "styled-components";


export const WeatherInfoIcons = {
  humidity: "/img/humidity.png",
  feels_like: "/img/feels_like.png",
};

const ColoredLine = styled.hr`
  color: rgb(128, 128, 128);
  width: 100%;
  margin-top: 20px;
`;


const WeatherLogo = styled.img`
   width: 140px;
   height: 140px;
   margin: 10px 40px 10px;
   align: center;
`;

const Temperature = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: bold;
`;

const Clouds = styled.span`
  margin: 0;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 500;
  text-transform:capitalize;
`;

const Location = styled.span`
  margin: 15px;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 500;
`;

const LocationIcon = styled.img`
   width: 18px;
   height: 15px;
   margin-right: 5px;
`;

const MoreInfo = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  font-weight: 500;
  & span {
    margin-top: 5px;
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const AppTitle = styled.span`
  color: #47B5FF;
  font-size: 18px;
  font-weight: bold;
`;

const Info = (props) => {
  const {name, value} = props;
  return (
      <InfoContainer>
          <InfoIcon src= {WeatherInfoIcons[name]}/>
          <InfoLabel>
              {value}
              <span> {name} </span>
          </InfoLabel>
      </InfoContainer>
  );
};


const Weather =(props)=>{

  const {weather} = props;

    return (<>
    <AppTitle>
    Weather App
    </AppTitle>
            <ColoredLine />
            <WeatherLogo src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} />
               <Temperature>{`${Math.floor(weather?.main?.temp - 273)}°C`}</Temperature>
               <Clouds>{`${weather?.weather[0].description}`}</Clouds>
               <Location>
               <LocationIcon src="/img/location.png" />
               {`${weather?.name}, ${weather?.sys?.country}`}
               </Location>
            <ColoredLine />
            <MoreInfo>
                <Info name="feels_like" value={Math.floor(weather?.main?.feels_like - 273)+"°C"} />
                <Info  name="humidity" value={weather?.main?.humidity} />
            </MoreInfo>


    </>);
}

export default Weather;