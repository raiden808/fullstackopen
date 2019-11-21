import React,{ useState, useEffect} from 'react';
import axios from 'axios'
import Weather from './Weather'

const SingleCountry = ({country}) =>{

  const [weatherData,setWeatherData] = useState()

  useEffect(() => {

    getWeather(country.capital)

  },[country])

  const getWeather = (capital) =>{
    axios
      .get(`http://api.weatherstack.com/forecast?access_key=${process.env.REACT_APP_WEATHER_API}&query=${capital}`)
      .then(output => {
       // console.log("weather triggerd.",output.data)
        setWeatherData(output.data)
        return output.data
      }).catch(error => {
        return "error"
      });
  }


	let singleLanguages = [];
  let countryKey = 0;
	for (let entry of country.languages) {
		singleLanguages.push(<li key={countryKey} >{entry.name}</li>);
    countryKey++;
	}
    
    return(
        <div key={country.alpha2Code}>
    			<h4>{country.name}</h4>
    			<p>capital {country.capital}</p>
    			<p>population {country.population}</p>
    			<h4>Languages</h4>
    				{
    					singleLanguages
    				}
    			<img 
    				style={{ height: 100 }} 
    				src={country.flag} 
    			/>
          <h4>Weather in {country.capital}</h4>
          <Weather weatherData={weatherData} />
  		</div>    
    )
}


export default SingleCountry